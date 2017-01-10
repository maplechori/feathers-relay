'use strict';
const respondent = require('./respondent');
const question = require('./question');
const section = require('./section');
const graphql = require('./graphql');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(section);
  app.configure(question);
  app.configure(respondent);
  app.configure(graphql);

};
