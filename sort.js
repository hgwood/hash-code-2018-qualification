const assert = require("assert");
const debug = require("debug")("sort");
const _ = require("lodash");

function sortRides(rides) {
  return _.orderBy(rides, ["start", "distance"], ["asc", "desc"]);
}

module.exports = { sortRides };
