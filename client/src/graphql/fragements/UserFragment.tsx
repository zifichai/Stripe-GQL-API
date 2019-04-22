import gql from "graphql-tag";

export const userFragment = gql`
  fragment UserInfo on User {
    _id, 
    email, 
    typeOfUser, 
    ccLast4
  }
`;