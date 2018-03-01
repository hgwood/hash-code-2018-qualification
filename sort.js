const assert = require("assert");
const debug = require("debug")("sort");
const _ = require("lodash");

function sortRides(rides, nrides) {
  rides = _.orderBy(rides, ["start"], ["asc"]);
  min = _.min(rides, "start");
  rides = rides.filter(r => r.start == min.start);
  return _.orderBy(rides, ["distance"], ["desc"]);
  /*return _(rides)
    .orderBy(["distanceToV"], ["asc"])
    .take(Math.max(100, nrides / 10))
    .orderBy(["start", "distance"], ["asc", "desc"])
    .value();*/
}

module.exports = { sortRides };
