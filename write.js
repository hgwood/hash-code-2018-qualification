const _ = require("lodash");
const fs = require("fs");
const debug = require("debug")("write");

module.exports = function write(path, solution, problem) {
  writeLines(path, unparse(solution));
  const ridesHonored = _.flatten(solution);
  const nridesHonored = ridesHonored.length;
  const ridesHonoredDistance = _.sumBy(
    _.at(problem.rides, ridesHonored),
    "distance"
  );
  const nridesRequested = problem.rides.length;
  const ridesRequestedDistance = _.sumBy(problem.rides, "distance");
  debug(
    "rides honored",
    nridesHonored,
    "for a total distance of",
    ridesHonoredDistance
  );
  debug(
    "rides requested",
    nridesRequested,
    "for a total distance of",
    ridesRequestedDistance
  );
  debug("on number of rides:", nridesHonored / nridesRequested * 100);
  debug("on distance:", ridesHonoredDistance, ridesRequestedDistance * 100);
  debug("rides missed", nridesRequested - nridesHonored);
};

function writeLines(path, lines) {
  fs.writeFileSync(path, lines.join("\n"));
  debug(`wrote ${lines.length} lines to ${path}`);
}

const unparse = function(vehicules) {
  return _.map(
    vehicules,
    vehicule => `${vehicule.length} ${vehicule.join(" ")}`
  );
};

module.exports.unparse = unparse;
