import fs from 'fs'
import path from 'path'
import { graphql } from 'graphql'
import { introspectionQuery, printSchema } from 'graphql/utilities'
import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import Resolvers from  '../src/services/graphql/resolvers';
import Schema from '../src/services/graphql/schema';


const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers
  });


(async () => {

  var result = await (graphql(executableSchema, introspectionQuery));


  if (result.errors) {
      console.error(
        'ERROR introspecting schema: ',
        JSON.stringify(result.errors, null, 2)
      );
    } else {

      console.log(printSchema(executableSchema));

      fs.writeFileSync(
        path.join(__dirname, '../data/schema.json'),
        JSON.stringify(result, null, 2)
      );

      fs.writeFileSync(
        path.join(__dirname, '../data/schema.graphql'),
       printSchema(executableSchema)
      );

    }

})();
