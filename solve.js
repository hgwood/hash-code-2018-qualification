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

  let nrides = rides.length;

  let time = 0;

  let vehicules = _.range(0, nvehicules).map(index => ({
    id: index,
    x: 0,
    y: 0,
    time: 0,
    rides: []
  }));

  let solution = vehicules.map(vehicule => {
    while ((available = ridesAvailable(vehicule, rides, nsteps))) {
      available = sortRides(available, nrides);
      let ride = available[0];
      vehicule = takeRide(vehicule, ride);
      _.remove(rides, r1 => r1.index == ride.index);
    }

    return vehicule.rides;
  });

  return solution;
}

module.exports = solve;
