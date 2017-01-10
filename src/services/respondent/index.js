'use strict';

const hooks = require('./hooks');


class Service {
  constructor(options) {
    this.options = options || {};

  }


  find(params) {
    console.log(params);
    return Promise.resolve(params.user);
  }
}

module.exports = function() {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/respondent', new Service());

  // Get our initialize service to that we can bind hooks
  const respondentService = app.service('/respondent');

  // Set up our before hooks
  respondentService.before(hooks.before);

  // Set up our after hooks
  respondentService.after(hooks.after);
};

module.exports.Service = Service;
