const { test } = require("node:test");
const assert = require("node:assert/strict");
const { initial, decide } = require("../demo/negotiation.js");
test("accepting the listed wage uses no budget", () => {
  const result = decide(initial(), 1);
  assert.equal(result.budget, 3000);
  assert.equal(result.result.wage, 9500);
  assert.equal(result.result.accepted, true);
});
test("counteroffer charges once and a rejected offer cannot be submitted again", () => {
  const result = decide(initial(), 0, 2000);
  assert.equal(result.budget, 1500);
  assert.equal(result.result.accepted, false);
  assert.equal(decide(result, 0, 2000), result);
});
test("invalid and unaffordable counteroffers cannot charge a fee", () => {
  const state = { ...initial(), budget: 500 };
  assert.throws(() => decide(state, 0, 1000), RangeError);
  assert.throws(() => decide(state, 0, -1000), RangeError);
  assert.equal(state.budget, 500);
});
