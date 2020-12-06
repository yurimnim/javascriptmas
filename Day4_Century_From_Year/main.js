/*
-- Day 4 --

Given a year, return the century it is in. 
The first century spans from year 1 up to and including the year 100,
the second - from the year 101 up to and including the year 200 etc.

-- Example --
    - For year = 1905, the output should be centuryFromYear(year) = 20;
    - For year = 1700, the output should be centuryFromYear(year) = 17;
*/

/* Solution by me*/
function centuryFromYear(num) {
  //  write code here.
  let century = Math.floor(num / 100);
  if (century >= 19) {
    century += 1;
  }
  console.log(century);
  return century;
}

/* Solution by Scrimba  */
function centuryFromYear2(year) {
  const century = year / 100;

  if (year % 100 === 0) {
    return century;
  }
  return Math.floor(century) + 1;
}

/**
 * Test Suite
 */
describe("centuryFromYear()", () => {
  it("returns current century", () => {
    // arrange
    const year = 1905;

    // act
    const result = centuryFromYear(year);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(20);
  });

  it("returns current century for edge case of start of century", () => {
    // arrange
    const year = 1700;

    // act
    const result = centuryFromYear(year);

    // log
    console.log("result 2: ", result);

    // assert
    expect(result).toBe(17);
  });
});
