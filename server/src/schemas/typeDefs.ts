import gql from 'graphql-tag';

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    products: [Product]
  }
  type Product {
    _id: ID
    name: String
    image: String
    brand: String
    price: String
    link: String
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
    saveProduct(name: String!, image: String!, brand: String!, price: String!, link: String!): User
    removeProduct(productId: ID!): User
  }
`;

export default typeDefs;
