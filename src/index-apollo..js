const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const User = require("./models/user");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    active: Boolean
    createdAt: String
  }
  type Query {
    user(id: ID!): User
    users: [User]
  }
  type Mutation {
    createUser(username: String!, email: String!): User
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    user: async id => {
      const user = await User.findById(id);
      return user;
    },
    users: async () => {
      const users = await User.find();
      return users;
    }
  },
  Mutation: {
    createUser()
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
