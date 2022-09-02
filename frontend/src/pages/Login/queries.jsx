import { gql } from "@apollo/client";

export const LOGİN_USER = gql`
mutation login($data: loginInput) {
  login(data: $data) {
    _id
    fullName
    email
    password
    token
  }
}


`;
