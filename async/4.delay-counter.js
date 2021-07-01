/*
Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.

When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.
*/

const countLogger = delayCounter(3, 50);

countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

function delayCounter(target, wait) {
  let counter = 1;
  function interval() {
    let intervalTimer = setInterval(() => {
      if (counter === target) {
        clearInterval(intervalTimer);
        console.log(counter);
        counter ++; 
      } else {
        console.log(counter);
        counter++;
      }
    }, wait);
  }

  return interval;
} 
