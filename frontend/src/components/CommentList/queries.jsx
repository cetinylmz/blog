import { gql } from "@apollo/client";

export const GET_POST = gql`
  query getPost($id: ID!) {
    getPost(id: $id) {
      _id
      title
      description
      likeCount
      commentCount
      users {
        _id
        fullName
      }
      comments {
        _id
        text
        users {
          _id
          fullName
        }
      }
    }
  }
`;
