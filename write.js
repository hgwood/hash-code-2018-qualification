const _ = require("lodash");
const fs = require("fs");
const debug = require("debug")("write");

module.exports = function write(path, solution) {
  writeLines(path, unparse(solution));
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
