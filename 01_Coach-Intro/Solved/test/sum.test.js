// Constructor Arithmetic is imported.
const sum = require('../sum.js');

// A testing suite for Sum is created.
describe('Testing sum function', () => {
  // A test is created to check that sum correctly returns 2 numbers added together.
  test('if add 0 and 0 equals 0', () => {
    const sumVal = sum(0, 0);

    expect(sumVal).toBe(0);
  });

  // A test is created to check that sum correctly returns 2 numbers added together.
  test('if add 1 and 1 equals 2', () => {
    const sumVal = sum(1, 1);

    expect(sumVal).toBe(2);
  });

  // A test is created to check that sum correctly returns 2 numbers added together.
  test('if add 2 and 4 equals 6', () => {
    const sumVal = sum(2, 4);

    expect(sumVal).toBe(6);
  });
});
