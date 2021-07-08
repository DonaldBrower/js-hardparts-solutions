/* Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0. */

const average = () => {
  const numbers = [];
  return (n) => {
    if (typeof n === "number") {
      numbers.push(n);
    }

    if (numbers.length > 0) {
      const sum = numbers.reduce((prev, cur) => prev + cur, 0);
      const avg = sum / numbers.length;

      return avg;
    }

    return 0;
  };
};

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8
