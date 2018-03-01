const assert = require('assert')
const debug = require('debug')('distance')
const _ = require('lodash')

function distance(x1, y1, x2, y2) {
  // From 1 to 2
  return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}

function distanceVR(vehicule, ride) {
  return distance(vehicule.x, vehicule.y, ride.ox, ride.oy)
}

module.exports = { distance, distanceVR }
