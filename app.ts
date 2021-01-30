import 'reflect-metadata';
require('dotenv').config();
import Express from "express";
import { ApolloServer } from 'apollo-server-express';
import { buildSchema }  from 'type-graphql';
import { LogResolver, TagResolver, LogTypeResolver } from './src/resolvers';

const main = async () => {

  const schema = await buildSchema({
    resolvers: [ LogResolver, TagResolver, LogTypeResolver ],
    validate: false,
    emitSchemaFile: {
      path: __dirname + "/graphql/schema.gql",
      commentDescriptions: true
    },
    dateScalarMode: "isoDate",
  });
  const server = new ApolloServer({ schema });

  const app = Express();

  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on http://localhost:4000/graphql");
  });

}

main();
