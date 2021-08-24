require("dotenv").config();

import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import mongoose from "mongoose";

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const app = express();

  await server.start();
  server.applyMiddleware({ app });

  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGO_URI_NAME}:${process.env.MONGO_URI_PASS}@cluster0.ecngt.mongodb.net/xplore_space?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Mongo Db is connected");
    });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
