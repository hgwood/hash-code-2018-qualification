/* eslint-env mocha */

const assert = require("assert");
const unparse = require("./write").unparse;

describe("unparse", function() {
  it("unparses correctly", function() {
    assert.deepEqual(unparse([[1, 2], [3, 4, 5]]), ["2 1 2", "3 3 4 5"]);
  });
});
