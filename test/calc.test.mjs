import { test } from "node:test";
import assert from "node:assert/strict";
import { subtract } from "../src/calc.mjs";

test("subtract returns the difference of two numbers", () => {
  assert.equal(subtract(5, 3), 2);
  assert.equal(subtract(-1, -1), 0);
});

test("subtract rejects values that are not finite numbers", () => {
  assert.throws(() => subtract("5", 3), TypeError);
  assert.throws(() => subtract(1, Number.NaN), TypeError);
});
