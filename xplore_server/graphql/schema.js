import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    hello: String!
    planets: [Planet!]!
  }

  type Mutation {
    createPlanet(name: String!): Planet
    deletePlanet(id: ID!): Planet
    updatePlanet(id: ID!, name: String!): Planet
  }

  type Planet {
    id: ID!
    name: String!
  }
`;

export default typeDefs;
