const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }
  type Product {
    _id: ID!
    name: String!
    description: String!
    category: String!
    price: Float
    image: String!
  }
  type Query {
    me: User
    products: [Product]
    getSingleProduct(productId:ID!): Product
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;