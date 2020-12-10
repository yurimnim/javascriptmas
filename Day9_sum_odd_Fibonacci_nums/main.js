/*
-- Day 9 --
Sum Odd Fibonacci Numbers

Given a positive integer num, return the sum of all add Fibonacci numbers 
that are less than or equal to num. 

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1,1,2,3,5 and 8. 

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers 
less than or equal to 10 are 1,1,3, and 5.

-- Example --
 - sumOddFibonacciNums(10) should return 10
 - sumOddFibonacciNums(1000) should return 1785
 - sumOddFibonacciNums(4000000) should return 4613732

*/
function sumOddFibonacciNumbers(num) {
  // write code here
  let result = 0;
  let prev = 0;
  let current = 1;

  while (current <= num) {
    if (current % 2 === 1) {
      result += current;
    }
    const nextVal = current + prev;
    prev = current;
    current = nextVal;
  }
  return result;
}

/**
 * Test Suite
 */
describe('sumOddFibonacciNumbers()', () => {
  it('returns sum of all odd Fibonnci numbers', () => {
    // arrange
    const num = 10;

    // act
    const result = sumOddFibonacciNumbers(num);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe(10);
  });

  it('returns sum of all odd Fibonnci numbers 2nd example', () => {
    // arrange
    const num = 1000;

    // act
    const result = sumOddFibonacciNumbers(num);

    // log
    console.log('result 2: ', result);

    // assert
    expect(result).toBe(1785);
  });
});
