// Tiny synthetic module for agent trials.

export function subtract(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) throw new TypeError("subtract expects two finite numbers");
  return a - b;
}
