const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    mobile: String
    address: String
    role: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input SignupInput {
    username: String!
    email: String!
    password: String!
    mobile: String!
    address: String!
    role: String!
  }

  type Query {
    users: [User]
    itIssueOptions: [String]
    me: User
  }

  type Mutation {
    addUser(input: SignupInput!): Auth
    login(email: String!, password: String!): Auth
    submitITIssue(category: String!, issue: String!): String
  }
`;

module.exports = typeDefs;
