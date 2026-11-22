import { test } from "node:test";
import assert from "node:assert/strict";
import { subtract, multiply } from "../src/calc.mjs";

test("subtract returns the difference of two numbers", () => {
  assert.equal(subtract(5, 3), 2);
  assert.equal(subtract(-1, -1), 0);
});

test("subtract rejects values that are not finite numbers", () => {
  assert.throws(() => subtract("5", 3), TypeError);
  assert.throws(() => subtract(1, Number.NaN), TypeError);
});

test("multiply returns the product of two numbers", () => {
  assert.equal(multiply(4, 3), 12);
  assert.equal(multiply(-2, 5), -10);
});

test("multiply returns zero when either argument is zero", () => {
  assert.equal(multiply(0, 7), 0);
  assert.equal(multiply(9, 0), 0);
});

test("multiply rejects values that are not finite numbers", () => {
  assert.throws(() => multiply("2", 3), TypeError);
  assert.throws(() => multiply(2, Number.NaN), TypeError);
  assert.throws(() => multiply(Infinity, 2), TypeError);
});
