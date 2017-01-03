// src/services/graphql/resolvers.js
// import verifyPassword from './lib/auth';

import request from 'request-promise'

export default function Resolvers() {
  let app = this;

  let Question = app.service('question');

  return {
    RootQuery: {

    },
    RootMutation: {

    }

  }
}
