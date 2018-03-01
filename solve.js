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
    finish: false,
    rides: []
  }));

  /*vehicules = vehicules.map(v => {
    ride = rides.pop();
    return takeRide(v, ride);
  });*/

  while (rides.length > 0) {
    unfinished = vehicules.filter(v => !v.finish);

    if (unfinished.length == 0) break;

    vehicule = _.minBy(unfinished, "time");

    let available = ridesAvailable(vehicule, rides, nsteps);
    debug(available);
    if (available) {
      available = sortRides(available, nrides);
      let ride = available[0];
      vehicule = takeRide(vehicule, ride);
      vehicules[vehicule.id] = vehicule;
      _.remove(rides, r1 => r1.index == ride.index);
    } else {
      vehicule.finish = true;
    }
  }

  let solution = vehicules.map(v => v.rides);

  return solution;
}

module.exports = solve;
