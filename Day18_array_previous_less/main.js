/*
-- Day 18 --
Array Previous Less

Given an array of integers, for each position i, search among the previous
positions for the last(from the left) position that contains a smaller value.
Store that value at position i in the answer. If no such vaue can be found,
store -1 instead. 

-- Example --
For items = [3,5,2,4,5] the output should be [-1,3,-1,2,4].
*/

//My Solution
function arrayPreviousLess(nums) {
  //  write code here.
  const previousLess = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        previousLess.unshift(nums[j]);
      } else if (j === 0) {
        previousLess.unshift(-1);
      }
    }
  }
  return previousLess;
}

/**
 * Test Suite
 */
describe('arrayPreviousLess()', () => {
  it('shift previous postions from the left to a smaller value or store -1', () => {
    // arrange
    const nums = [3, 5, 2, 4, 5];

    // act
    const result = arrayPreviousLess(nums);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toEqual([-1, 3, -1, 2, 4]);
  });
});
