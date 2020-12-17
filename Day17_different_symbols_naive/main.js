/*
-- Day 17 --
Different symbols naive

Given a string, find the number of different characters in it.

-- Example --
For s = 'cabca', the output should be 3.
There are 3 different characters: a,b and c. 
*/

function differentSymbolsNaive(str) {
  //  write code here.
}

/**
 * Test Suite
 */
describe('differentSymbolsNaive()', () => {
  it('returns count of unique characters', () => {
    // arrange
    const str = 'cabca';

    // act
    const result = differentSymbolsNaive(str);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe(3);
  });
});
