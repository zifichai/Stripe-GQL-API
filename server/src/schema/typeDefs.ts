import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    _id: ID!
    email: String!, 
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    me: User
  }, 

  type Mutation {
    register(email: String!, password: String): Boolean!
    login(email: String!, password: String): User
  }
`;