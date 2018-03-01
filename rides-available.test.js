/* eslint-env mocha */

const assert = require("assert");
const ridesAvailable = require("./ridesAvailable");

describe("ridesAvailable", function() {
  it("ridesAvailables", function() {
    assert.deepEqual(ridesAvailable(), undefined);
  });
});
