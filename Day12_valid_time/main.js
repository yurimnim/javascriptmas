/*
-- Day 12 --
Valid Time

You are given an array of integers representing coordinates of obstacles 
situdated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. 
You are allowed only to make jumps of the same length represented by some integer. 

Find the minimal length of the jump enough to avoid all obstacles. 
  
-- Example --
For inputArray = [5,3,6,7,9], 
the output should be avoidObstacles(inputArray) = 4.

*/

//My solution
function validTime(str) {
  //  write code here.
  str = str.split(':');
  let result = true;
  const hr = parseInt(str[0]);
  const min = parseInt(str[1]);

  if (hr > 24 || hr < 0 || min < 0 || min > 59) {
    result = false;
  }
  return result;
}

//Solution by Scrimba
function validTime2(str) {
  //  write code here.
  const [hours, minute] = str.split(':');

  if (parseInt(hours) > 23 || parseInt(hours) < 0) {
    return false;
  }

  if (parseInt(minute) > 59 || parseInt(minute) < 0) {
    return false;
  }

  return true;
}

/**
 * Test Suite
 */
describe('validTime()', () => {
  it('returns true for valid time', () => {
    // arrange
    const str = '13:58';

    // act
    const result = validTime(str);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe(true);
  });

  it('returns false when invalid hours', () => {
    // arrange
    const str = '25:51';

    // act
    const result = validTime(str);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe(false);
  });

  it('returns false when invalid minutes', () => {
    // arrange
    const str = '02:76';

    // act
    const result = validTime(str);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe(false);
  });
});
