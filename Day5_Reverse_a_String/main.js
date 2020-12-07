/*
-- Day 5 --

Reverse A String!

Reverse the provided string. 
You may need to turn string into an array before you can reverse it. 
Your result must be a string.

-- Example --
    - reverseAString('hello') returns 'olleh';
    - reverseAString('Howdy') returns 'ydwoH';    
*/

function reverseAString(str) {
  return str.split('').reverse().join('');
}

/**
 * Test Suite
 */
describe('reverseAString()', () => {
  it('returns original string reversed', () => {
    // arrange
    const str = 'hello';

    // act
    const result = reverseAString(str);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe('olleh');
  });
});
