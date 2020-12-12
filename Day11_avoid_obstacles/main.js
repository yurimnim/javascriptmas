/*
-- Day 11 --
Avoid Obstacles

You are given an array of integers representing coordinates of obstacles 
situdated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. 
You are allowed only to make jumps of the same length represented by some integer. 

Find the minimal length of the jump enough to avoid all obstacles. 

-- Example --
For inputArray = [5,3,6,7,9], 
the output should be avoidObstacles(inputArray) = 4.

*/

function avoidObstacles(nums) {
  //pick the largest number from the array.
  const largestNum = nums.sort((a, b) => a - b)[nums.length - 1];

  //
  for (let i = 1; i <= largestNum + 1; i++) {
    if (nums.every(value => value % i !== 0)) {
      return i;
    }
  }
}

/**
 * Test Suite
 */
describe('avoidObstacles()', () => {
  it('returns minimal number of jumps in between numbers', () => {
    // arrange
    const nums = [5, 3, 6, 7, 9];

    // act
    const result = avoidObstacles(nums);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe(4);
  });
});
