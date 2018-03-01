/* eslint-env mocha */

const assert = require("assert");
const takeRide = require("./takeRide");

describe("takeRide", function() {
  it("takeRides", function() {
    assert.deepEqual(takeRide(), undefined);
  });
});
