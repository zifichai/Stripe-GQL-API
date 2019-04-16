import * as bcrypt from 'bcrypt';
import { IResolvers } from "graphql-tools";
import User from "../entity/User";
import { User as UserType } from "../types";

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
    }
  }
}