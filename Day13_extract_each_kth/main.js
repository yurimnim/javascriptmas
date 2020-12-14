/*
-- Day 13 --
Extract Each Kth

Given array of integeres, remove each kth element from it. 
  
-- Example --
For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
and k = 3, the output sholud be extractEachKth(inputArray, k) = [1, 2, 3, 4, 5, 7, 8, 10]
*/

//My solution
function extractEachKth(nums, index) {
  //  write code here.
  const result = nums.filter(num => num % index !== 0);
  return result;
}

/**
 * Test Suite
 */
describe('extractEachKth()', () => {
  it('returns largest positive integer possible for digit count', () => {
    // arrange
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const index = 3;

    // act
    const result = extractEachKth(nums, index);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toEqual([1, 2, 4, 5, 7, 8, 10]);
  });
});
