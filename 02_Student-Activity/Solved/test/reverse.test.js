// Constructor Arithmetic is imported.
const reverseString = require('../reverseString.js');

// A testing suite for Reverse String is created.
describe('Reverse String', () => {
  // A test is created to check that and empty string returns an empty string.
  describe('reverseString', () => {
    it('should reverse string "" and get ""', () => {
      expect(reverseString("")).toEqual("");
    });
  });
});

describe('Reverse String', () => {
  // A test is created to check that reversing "hello world" produces "dlrow olleh"
  describe('reverseString', () => {
    it('should reverse string "hello world" and get "dlrow olleh"', () => {
      expect(reverseString("hello world")).toEqual("dlrow olleh");
    });
  });
});

describe('Reverse String', () => {
  // A test is created to check that the string "12345" is reverse to "54321"
  describe('reverseString', () => {
    it('should reverse string "12345" and get "54321"', () => {
      expect(reverseString("12345")).toEqual("54321");
    });
  });
});
