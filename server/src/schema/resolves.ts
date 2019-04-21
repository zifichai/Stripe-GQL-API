import * as bcrypt from 'bcrypt';
import { IResolvers } from "graphql-tools";
import User from "../entity/User";
import { User as UserType } from "../types";
import { stripe } from '../stripe';

export const resolvers: IResolvers = {
  User: {
    createdAt: (parent) => {
      return new Date(parent.createdAt).toISOString();
    },
    updatedAt: (parent) => {
      return new Date(parent.updatedAt).toISOString();
    }
  },


  Query: {
    me: async (_, __, { req }) => {
      if (!req.session.userId) return null;
      else return User.findById(req.session.userId);
    }
  },

  Mutation: {
    register: async (_, { email, password }): Promise<Boolean> => {
      try {
        const hashed = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hashed });
        const isSaved = await user.save();
        if (!isSaved) throw new Error('unable to creat user');
        else return true;
      } catch (error) {
        throw error;
      }
    },
    login: async (_, { email, password }, { req }): Promise<UserType> => {
      try {
        const user = await User.findOne({ email: email }).lean();
        if (!user) throw new Error('Invalid credentials')

        const isValid = bcrypt.compare(password, user.password);
        if (!isValid) throw new Error('Invalid credentials');


        req.session.userId = user._id;

        return user;

      } catch (error) {
        throw error;
      }
    },
    createSubscripton: async (_, { source }, { req }) => {
      if (!req.session || !req.session.userId) {
        throw new Error('Not authenticated')
      }

      console.log(req);

      const user = await User.findById(req.session.userId);

      if (!user) throw new Error()

      const customer = await stripe.customers.create({
        email: user.email,
        source: source,
        plan: process.env.STRIPE_APPLE_PLAN
      });

      user.stripeId = customer.id;
      user.typeOfUser = 'paid';

      await user.save();


      return user;
    }
  }
}