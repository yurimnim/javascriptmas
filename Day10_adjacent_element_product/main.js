/*
-- Day 10 --
Given an array of integers, find the pair of adjacent elements that has the largest produc
and return that product.

-- Example --
For inputArray = [3, 6, -2, -5, 7, 3], 
the output should be adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product. 

*/

// My Solution
function adjacentElementsProduct(nums) {
  let result = nums[0] * nums[1];
  for (let i = 1; i < nums.length - 1; i++) {
    let aProduct = nums[i] * nums[i + 1];
    if (aProduct >= result) {
      result = aProduct;
    }
  }
  return result;
}

//other solution
function adjacentElementsProduct2(nums) {
  let multiples = [];
  for (let i = 0; i < nums.length - 1; i++) {
    multiples.push(nums[i] * nums[i + 1]);
  }
  const max = Math.max(...multiples); // spread operator
  return max;
}

//solution by scrimba
function adjacentElementsProduct3(nums) {
  let largestProduct = nums[0] * nums[1];

  for (let i = 1; i < nums.length - 1; i++) {
    const adjacentProduct = nums[i] * nums[i + 1];

    if (largestProduct < adjacentProduct) {
      largestProduct = adjacentProduct;
    }
  }

  return largestProduct;
}

/**
 * Test Suite
 */
describe('adjacentElementsProduct()', () => {
  it('returns largest product of adjacent values', () => {
    // arrange
    const nums = [3, 6, -2, -5, 7, 3];

    // act
    const result = adjacentElementsProduct(nums);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe(21);
  });
});
