/*
-- Day 17 --
Different symbols naive

Given a string, find the number of different characters in it.

-- Example --
For s = 'cabca', the output should be 3.
There are 3 different characters: a,b and c. 
*/

//My Solution
function differentSymbolsNaive(str) {
  //  write code here.
  str = str.split('');
  result = [];
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== str[i + 1] && !result.includes(str[i + 1])) {
      result.push(str[i + 1]);
    }
  }
  return result.length;
}

//Scrimba's solution (1)
function differentSymbolsNaive2(str) {
  const uniqueChars = [];
  const chars = str.split('');

  chars.forEach(char => {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  });

  return uniqueChars.length;
}

//Scrimba's solution (2)
function differentSymbolsNaiveSet(str) {
  const chars = str.split('');

  return new Set(chars).size;
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
