const assert = require("assert");
const debug = require("debug")("takeRide");
const _ = require("lodash");

const { distanceVR } = require("./distance");

module.exports = function takeRide(vehicule, ride) {
  return {
    id: vehicule.id,
    x: ride.dx,
    y: ride.dy,
    time: vehicule.time + distanceVR(vehicule, ride) + ride.distance,
    rides: [...vehicule.rides, ride.index]
  };
};
