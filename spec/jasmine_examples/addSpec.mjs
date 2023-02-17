import { add } from "../../src/script/arithmetic.mjs";

describe("A suite", function () {
  it("2 plus 2 should 4 ", function () {
    expect(add("2", 2)).toBe(4);
  });
});
