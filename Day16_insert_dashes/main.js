/*
-- Day 16 --
Insert Dashes

Transform a given sentence into a new one with
dashes between each two consecutive letters

-- Example --
For input ="aba caba",
the output should be "a-b-a c-a-b-a"
*/

function insertDashes(str) {
  const words = str.split(' ');
  const dashedWords = words.map(word => {
    const chars = word.split('');

    return chars.join('-');
  });
  return dashedWords.join(' ');
}

/**
 * Test Suite
 */
describe('insertDashes()', () => {
  it('insert dashes in between chars', () => {
    // arrange
    const value = 'aba caba';

    // act
    const result = insertDashes(value);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe('a-b-a c-a-b-a');
  });
});
