const _ = require("lodash");
const fs = require("fs");
const debug = require("debug")("write");

module.exports = function write(path, solution, problem) {
  writeLines(path, unparse(solution));
  const ridesHonored = _.flatten(solution).length;
  const ridesRequested = problem.rides.length;
  debug("rides honored", ridesHonored);
  debug("rides requested", ridesRequested);
  debug("rides missed", ridesRequested - ridesHonored);
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
