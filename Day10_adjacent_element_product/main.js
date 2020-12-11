/*
-- Day 10 --

-- Example --
 - sumOddFibonacciNums(10) should return 10
 - sumOddFibonacciNums(1000) should return 1785
 - sumOddFibonacciNums(4000000) should return 4613732

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
