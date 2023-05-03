// Constructor Arithmetic is imported.
const reverseString = require('../reverseString.js');

// A testing suite for Reverse String is created.
describe('Testing the reverseString function', () => {
  // A test is created to check that and empty string returns an empty string.
  test('if reverse string if "" returns ""', () => {
    expect(reverseString("")).toEqual("");
  });

  // A test is created to check that reversing "hello world" produces "dlrow olleh"
  test('if reverse string of "hello world" returns "dlrow olleh"', () => {
    expect(reverseString("hello world")).toEqual("dlrow olleh");
  });

  // A test is created to check that the string "12345" is reverse to "54321"
  test('sif reverse string of "12345" returns "54321"', () => {
    expect(reverseString("12345")).toEqual("54321");
  });

});
