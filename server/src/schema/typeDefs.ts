import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    typeOfUser: String!
    ccLast4: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    me: User
  }, 

  type Mutation {
    register(email: String!, password: String): Boolean!
    login(email: String!, password: String): User
    createSubscripton(source: String!, ccLast4: String): User!
    updateCard(source: String!, ccLast4: String!): User!

  }
`;