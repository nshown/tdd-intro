// Constructor Arithmetic is imported.
const sum = require('../sum.js');

// A testing suite for Sum is created.
describe('Sum', () => {
  // A test is created to check that sum correctly returns 2 numbers added together.
  describe('sum', () => {
    test('if add 0 and 0 equals 0', () => {
      expect(sum(0, 0)).toEqual(0);
    });
  });
});

describe('Sum', () => {
  // A test is created to check that sum correctly returns 2 numbers added together.
  describe('sum', () => {
    test('if add 1 and 1 equals 2', () => {
      expect(sum(1, 1)).toEqual(2);
    });
  });
});

describe('Sum', () => {
  // A test is created to check that sum correctly returns 2 numbers added together.
  describe('sum', () => {
    test('if add 2 and 4 equals 6', () => {
      expect(sum(2, 4)).toEqual(6);
    });
  });
});
