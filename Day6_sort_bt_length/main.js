/*
-- Day 6 --

Sort by Length!

Given an array of Strings,  sort them in the order of increasing lengths. 
If two strings have the same length,
their relative order must be the same as in the initial array. 

-- Example --
    - For inputArray = ["abc", "", "a","aaa","zz"];
    The output shold be 
    sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"];    
*/

function sortByLength(strs) {
  strs.sort(function (a, b) {
    return a.length - b.length;
  });
  return strs;
}

/**
 * Test Suite
 */
describe('sortByLength()', () => {
  it('sorts the strings from shortest to longest', () => {
    // arrange
    const strs = ['abc', '', 'aaa', 'a', 'zz'];

    // act
    const result = sortByLength(strs);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toEqual(['', 'a', 'zz', 'abc', 'aaa']);
  });
});
