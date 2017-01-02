// src/services/graphql/index.js
'use strict';

const hooks = require('./hooks');
import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import Resolvers from  './resolvers';
import Schema from './schema';

module.exports = function () {
  const app = this;

  const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers.call(app)
  });


  // Initialize our service with any options it requires
  app.use('/graphql', apolloExpress((req) => {
    let {token, provider} = req.feathers;
    return {
      schema: executableSchema,
      context: {
        token,
        provider
      }
    }
  }));

  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }))

};
