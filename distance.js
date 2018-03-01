const assert = require('assert')
const debug = require('debug')('distance')
const _ = require('lodash')

module.exports = function distance(x1, y1, x2, y2) {
  // From 1 to 2
  return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}
