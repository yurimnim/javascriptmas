/*

/*
-- Day 21 --
Sum of two

You have two integer arrays, a and b, and an integer target value v. 
Determine whether there is a pair of numbers, where one number is taken 
from a and the other from b, that can be added together to get sum of v. 
Return true if such a pair exists, otherwise return false. 

-- Example --
For a = [1, 2, 3], b = [10, 20, 30, 40] , 
and v = 42, the output should be sumOfTwo(a,b,v) = true
*/

function sumOfTwo(nums1, nums2, value) {
  const map = {};

  for (let num of nums1) {
    const difference = value - num;
    map[difference] = difference; // {39: 39, 40: 40, 41: 41}
  }

  for (let num of nums2) {
    if (map.hasOwnProperty(num)) {
      return true;
    }
  }
  return false;
}

/**
 * Test Suite
 */
describe('sumOfTwo()', () => {
  it('returns true if a value can be found that by adding one number from each list', () => {
    // arrange
    const nums1 = [1, 2, 3];
    const nums2 = [10, 20, 30, 40];
    const value = 42;

    // act
    const result = sumOfTwo(nums1, nums2, value);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe(true);
  });
});
