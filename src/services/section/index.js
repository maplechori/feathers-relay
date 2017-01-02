'use strict';

const service = require('feathers-mongoose');
const section = require('./section-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: section,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/sections', service(options));

  // Get our initialize service to that we can bind hooks
  const sectionService = app.service('/sections');

  // Set up our before hooks
  sectionService.before(hooks.before);

  // Set up our after hooks
  sectionService.after(hooks.after);
};
