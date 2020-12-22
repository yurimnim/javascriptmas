/*
-- Day 22 --
Extract Matrix Column

Given a rectangular matrix and an integer column, return an array contraining the elements
of the columnth column of the given matrix (the leftmost column is the 0th one)


-- Example --
For matrix = [[1,1,1,2],[0,5,0,4],[2,1,3,6]] and column = 2, 
the output should be extractMatrixColumn(matrix, column) = [1,0,3]
*/

//My Solution
function extractMatrixColumn(matrix, column) {
  //  write code here.
}

/**
 * Test Suite
 */
describe('extractMatrixColumn()', () => {
  it('returns largest positive integer possible for digit count', () => {
    // arrange
    const matrix = [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6],
    ];
    const column = 2;

    // act
    const result = extractMatrixColumn(matrix, column);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toEqual([1, 0, 3]);
  });
});
