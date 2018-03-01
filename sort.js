const assert = require("assert");
const debug = require("debug")("sort");
const _ = require("lodash");

function sortRides(rides) {
  return _.sortBy(rides, ["start", "distance"]); // distance
}

module.exports = { sortRides };
