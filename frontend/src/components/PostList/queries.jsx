import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts {
    getPosts {
      _id
      title
      description
      likeCount
      commentCount
      users {
        _id
        fullName
      }
    }
  }
`;
