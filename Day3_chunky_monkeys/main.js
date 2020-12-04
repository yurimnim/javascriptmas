/*
Day 3

Write a function that splits an array (first argument) 
into groups the length of size (second argument) 
and returns them as a two-dimensional array, 

Example
- chunkyMonkey(['a','b','c','d'],2) should return[['a','b'],['c','d']].
- chunkyMonky([0,1,2,3,4,5],4) should return [[0,1,2,3],[4,5]].

*/
function chunkyMonkey(values, size) {
  //  write code here.
  let result = [];
  valueSlice = values.slice(0, size);
  valueSliceEnd = values.slice(size);

  result.push(valueSlice);
  result.push(valueSliceEnd);

  return result;
}

/**
 * Test Suite
 */
describe("chunkyMonkey()", () => {
  it("returns largest positive integer possible for digit count", () => {
    // arrange
    const values = ["a", "b", "c", "d"];
    const size = 2;

    // act
    const result = chunkyMonkey(values, size);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual([
      ["a", "b"],
      ["c", "d"]
    ]);
  });
});
