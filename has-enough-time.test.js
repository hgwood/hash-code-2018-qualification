/* eslint-env mocha */

const assert = require('assert')
const hasEnoughTime = require('./hasEnoughTime')

describe('hasEnoughTime', function () {
  it('hasEnoughTimes', function () {
    assert.deepEqual(
      hasEnoughTime(),
      undefined)
  })
})
