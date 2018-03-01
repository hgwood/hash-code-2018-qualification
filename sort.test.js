/* eslint-env mocha */

const assert = require("assert");
const sort = require("./sort");

describe("sort", function() {
  it("sorts", function() {
    assert.deepEqual(sort(), undefined);
  });
});
