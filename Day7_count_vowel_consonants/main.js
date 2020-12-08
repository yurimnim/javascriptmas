/*
-- Day 7 --

Count Vowel Consonant. 

You are given a string s that consists of only lowercase English letters.
If vowels('a', 'e', 'i', 'o', and 'u') are given a value of 1 and consonants are given a value of 2, 
return the sum of all of the letteres in the input string. 
-- Example --
 For s = "abcde", the output sholud be countVowelConsonant(s) = 8.
  
*/

/* Solution by me */
function countVowelConsonant(str) {
  // write code here
  str = str.split('');
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      result += 1;
    } else {
      result += 2;
    }
  }
  return result;
}

//Solution by Scrimba
function countVowelConsonant2(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const chars = str.split('');
  const total = chars.reduce((acc, char) => {
    if (vowels.includes(char)) {
      return acc + 1;
    }

    return acc + 2;
  }, 0);

  return total;
}

/**
 * Test Suite
 */
describe('countVowelConsonant()', () => {
  it('returns total of vowels(1) and consonants(2) to be added', () => {
    // arrange
    const value = 'abcde';

    // act
    const result = countVowelConsonant(value);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe(8);
  });
});
