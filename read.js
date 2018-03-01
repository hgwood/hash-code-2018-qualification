const _ = require("lodash/fp");
const assert = require("assert");
const debug = require("debug")("read");
const fs = require("fs");
const jolicitron = require("jolicitron");
const computeDistance = require("./distance");

module.exports = function read(filePath) {
  const cachedFile = `${filePath.split(".")[0]}.in.json`;
  try {
    fs.accessSync(cachedFile);
    debug(`using cached ${cachedFile}`);
  } catch (err) {
    debug(`not using cached input file because:`, err);
    const textFromInputFile = fs.readFileSync(filePath, "utf8");
    debug(`read ${textFromInputFile.length} chars from ${filePath}`);
    const result = module.exports.parse(textFromInputFile);
    fs.writeFileSync(cachedFile, JSON.stringify(result));
    debug(`written cached input file to ${cachedFile}`);
    return result;
  }
  return require(`./${cachedFile}`);
};

const parse = inputText => {
  const parse = jolicitron((save, n) => [
    "nrows",
    "ncolumns",
    "nvehicules",
    save(),
    "nbonus",
    "nsteps",
    n("rides", "ox", "oy", "dx", "dy", "start", "finish")
  ]);
  const { parsedValue, remaining } = parse(inputText);
  assert.equal(remaining.trim(), "");
  debug("end parsing");
  parsedValue.rides = _.map(ride => {
    return Object.assign(ride, {
      distance: computeDistance(ride.ox, ride.oy, ride.dx, ride.dy)
    });
  }, parsedValue.rides);
  debug("end computing distances");
  return parsedValue;
};

const assertValid = _.tap(parserOutput => {});

const parseAndValidate = _.flow(
  parse,
  assertValid,
  _.tap(() => debug("parsing completed"))
);

module.exports.parse = parse;
