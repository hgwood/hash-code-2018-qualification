const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");

const { sortRides } = require("./sort");
const takeRide = require("./take-ride");
const hasEnoughTime = require("./has-enough-time");
const ridesAvailable = require("./rides-available");

/**
 * @typedef {object} Ride
 * @property {number} ox
 * @property {number} oy
 * @property {number} dx
 * @property {number} dy
 * @property {number} start
 * @property {number} finish
 * @property {number} distance
 *
 * @typedef {object} Problem
 * @property {number} nrows
 * @property {number} ncolumns
 * @property {number} nvehicules
 * @property {number} nbonus
 * @property {number} nsteps
 * @property {Ride[]} rides
 *
 * @typedef {number[]} Solution
 * @property {number}
 *
 * @param {Problem} problem
 * @returns {Solution[]}
 */
function solve(problem) {
  // destructure this!

  let { rides, nvehicules, nsteps } = problem;

  let time = 0;

  rides = sortRides(rides);

  let vehicules = _.range(0, nvehicules).map(index => ({
    id: index,
    x: 0,
    y: 0,
    time: 0,
    rides: []
  }));

  let v1 = vehicules[1];

  while ((available = ridesAvailable(v1, rides, nsteps))) {
    available = sortRides(v1, available);
    let ride = available[0];
    v1 = takeRide(v1, ride);
    _.pull(rides, ride);
  }

  let solution = [v1.rides];

  return solution;
}

module.exports = solve;
