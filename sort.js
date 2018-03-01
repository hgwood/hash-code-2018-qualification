const assert = require("assert");
const debug = require("debug")("sort");
const _ = require("lodash");

function sortRides(rides, nrides) {
  return _(rides)
    .orderBy(["distanceToV"], ["asc"])
    .take(Math.max(100, nrides / 10))
    .orderBy(["start", "distance"], ["asc", "desc"])
    .value();
}

module.exports = { sortRides };
