"use strict";

var debouncedSayHi = debounce(sayHi, 3000);
console.log(debouncedSayHi()); // -> 'hi'

setTimeout(() => {
  console.log(debouncedSayHi());
}, 2000); // -> undefined

setTimeout(() => {
  console.log(debouncedSayHi());
}, 4000); // -> undefined

setTimeout(() => {
  console.log(debouncedSayHi());
}, 8000); // -> 'hi'

function sayHi() {
  return "hi";
}

//*************************************
function debounce(callback, interval) {
  var timer,
    readyToCall = true;
  
  // @returns callback(), or "undefined" depending on if interval ms have ellapsed since last call to debouncedFunction
  function debouncedFunction() {
    if (readyToCall) {
      readyToCall = false;

      timer = setTimeout(() => {
        readyToCall = true;
      }, interval);

      return callback();
    } else {
      // when debouncedFunction is not ready to be called,the timer running from the 
      // previous call should be reset—making it "debouced three seconds from every call", 
      // instead of "debounded three seconds from every successful call"
      clearTimeout(timer);

      timer = setTimeout(() => {
        readyToCall = true;
      }, interval);

      return "unsucessful";
    }
  }

  return debouncedFunction;
}
