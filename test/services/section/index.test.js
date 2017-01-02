'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('section service', function() {
  it('registered the sections service', () => {
    assert.ok(app.service('sections'));
  });
});
