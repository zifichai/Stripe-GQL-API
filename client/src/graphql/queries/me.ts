import { gql } from "apollo-boost";

export const meQuery = gql`
  query MeQuery{
    me {
      _id
      email
      typeOfUser
    }
  }
`;