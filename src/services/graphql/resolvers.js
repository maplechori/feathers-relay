// src/services/graphql/resolvers.js
// import verifyPassword from './lib/auth';

import request from 'request-promise'

export default function Resolvers() {
  let app = this;

  let Question = app.service('question');
  let Respondent = app.service('respondent');

  console.log(Respondent);

  const localRequest = request.defaults({
      baseUrl: `http://${app.get('host')}:${app.get('port')}`,
      json: true
    });


  return {
    RootQuery: {

    },
    RootMutation: {

    }

  }
}
