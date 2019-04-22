import { gql } from "apollo-boost";
import { userFragment } from "../fragements/UserFragment";

export const meQuery = gql`
  query MeQuery{
    me {
      ...UserInfo
    }
  }

  ${userFragment}
`;