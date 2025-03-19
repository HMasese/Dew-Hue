import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation($input: UserInput!) {
  addUser(input: $input) {
    user {
      username
      _id
    }
    token
  }
}`

export const SAVE_PRODUCT = gql`
mutation saveProduct($name: String!, $image: String!, $brand: String!, $price: String!, $link: String!) {
  saveProduct(name: $name, image: $image, brand: $brand, price: $price, link: $link) {
    _id
    email
    username
    products {
      _id
      name
      image
      brand
      price
      link
    }
  }
}
`;

