const debug = require('debug')('solve')
const _ = require('lodash')
const gridUtils = require('./grid-utils')

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

  const { rides, nVehicules } = problem

  let time = 0

  let vehicules = _.range(0, nVehicules).map(index => ({
    id: index,
    x: 0,
    y: 0
  }))

  let solution = vehicules.map(v => [rides.pop()])

  return solution
}

module.exports = solve
