'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('respondent service', function() {
  it('registered the respondents service', () => {
    assert.ok(app.service('respondents'));
  });
});
