const assert = require("assert");
const debug = require("debug")("ridesAvailable");
const _ = require("lodash");

const { distanceVR } = require("./distance");
const hasEnoughTime = require("./has-enough-time");

module.exports = function ridesAvailable(vehicule, rides, nsteps) {
  rides = rides.map(r =>
    Object.assign({ distanceToV: distanceVR(vehicule, r) }, r)
  );

  rides = rides.filter(r => r.finish >= vehicule.time);

  rides = rides.filter(r => hasEnoughTime(vehicule, r, nsteps));

  return rides.length > 0 ? rides : false;
};
