const assert = require("assert");
const debug = require("debug")("sort");
const _ = require("lodash");

function sortRides(rides, nrides, time) {
  if (time > 30000) {
    rides = _.orderBy(rides, ["distance"], ["desc"]);
    min = _.min(rides, "distance");
    rides = rides.filter(r => r.distance == min.distance);
    return _.orderBy(rides, ["distanceToV", "start"], ["asc", "asc"]);
  } else {
    rides = rides.filter(r => r.distance <= 1000);
    rides = _.orderBy(rides, ["distanceToV"], ["asc"]);
    min = _.min(rides, "distanceToV");
    rides = rides.filter(r => r.distanceToV == min.distanceToV);
    return _.orderBy(rides, ["start", "distance"], ["asc", "desc"]);
  }
  /*return _(rides)
    .orderBy(["distanceToV"], ["asc"])
    .take(Math.max(100, nrides / 10))
    .orderBy(["start", "distance"], ["asc", "desc"])
    .value();*/
}

module.exports = { sortRides };
