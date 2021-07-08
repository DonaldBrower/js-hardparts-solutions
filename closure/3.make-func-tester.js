/*
Create a function makeFuncTester that
  - accepts an array (of two-element sub-arrays)
  - returns a function (that will accept a callback). 
  
The returned function should: 
  - return true if: 
    - the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). 
  - Otherwise, the returned function should return false. 
*/

const makeFuncTester = (arrOfTests) => {
  return (cb) => {
    let passes = true;
    arrOfTests.forEach((test) => {
      if (cb(test[0]) !== test[1]) {
        passes = false;
      }
    });
    return passes;
  };
};

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(["hello", "hellO"]);
capLastTestCases.push(["goodbye", "goodbyE"]);
capLastTestCases.push(["howdy", "howdY"]);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
