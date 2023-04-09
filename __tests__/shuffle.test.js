const shuffle = require("../src/shuffle");

describe("shuffle should keep all the same items in the array, and return an array of the same length as the argument passed in", () => {
  const array = [1, 2, 3, 4]
  test('Keep all the same items in the array', () => {
    expect(shuffle(array)).toContain(1, 2, 3, 4)
  })

  test('Return an array of the same length as the argument passed in', () => {
    expect((shuffle(array)).length).toEqual(array.length)
  })
});
