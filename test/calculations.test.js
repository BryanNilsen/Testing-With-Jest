import { add, subtract } from "../src/scripts/calculations.js";

describe("Function calculates sum of parameters", () => {
  let result;
  beforeAll(() => {
    result = add(1, 2);
  });

  test("result has correct sum", () => {
    expect(result).toBe(3);
  });
});

describe("Function calculates difference of parameters", () => {
  let result;
  beforeAll(() => {
    result = subtract(12, 7);
  });

  test("result has correct difference", () => {
    expect(result).toBe(5);
  });
});
