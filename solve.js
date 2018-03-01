const debug = require('debug')('solve')
const _ = require('lodash')
const gridUtils = require('./grid-utils')

const { sortRides } = require('./sort')

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

  let { rides, nvehicules } = problem

  let time = 0

  rides = sortRides(rides)

  let vehicules = _.range(0, nvehicules).map(index => ({
    id: index,
    x: 0,
    y: 0,
    time: 0
  }))

  let solution = vehicules.map(() => [])

  let v1 = vehicules[1]

  while ((ridesAvailables = ridesAvailables(v1, rides))) {
    ridesAvailables = sortRides(v1, ridesAvailables)
    let ride = ridesAvailables[0]
    v1 = takeRide(v1, ride)
    _.pull(rides, ride)
  }

  /*vehicules.forEach(v => {

	})*/

  /*while (rides.length > 0) {
    vehicules.forEach((v, i) => {
      if (rides.length > 0) {
        solution[i].push(rides.pop().index);
      }
    });
  }*/

  /*let solution = vehicules.map(
    (v, index) => (index < rides.length ? [index] : [])
  );*/
  return solution
}

module.exports = solve
