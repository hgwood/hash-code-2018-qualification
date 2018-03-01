const assert = require("assert");
const debug = require("debug")("hasEnoughTime");
const _ = require("lodash");

const { distanceVR } = require("./distance");

module.exports = function hasEnoughTime(vehicule, ride, nsteps) {
  return (
    Math.max(vehicule.time + distanceVR(vehicule, ride), ride.start) +
      ride.distance <=
    Math.min(ride.finish, nsteps - 1)
  );
};
