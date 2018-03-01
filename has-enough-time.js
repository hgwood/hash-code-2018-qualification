const assert = require('assert')
const debug = require('debug')('hasEnoughTime')
const _ = require('lodash')

const { distanceVR } = require('./distance')

module.exports = function hasEnoughTime(time, vehicule, ride, nSteps) {
  return (
    time + distanceVR(vehicule, ride) + ride.distance <=
    Math.min(ride.finish, nSteps - 1)
  )
}
