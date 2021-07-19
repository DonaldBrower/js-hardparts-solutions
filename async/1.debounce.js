function debounce(callback, interval) {
  let timer,
    readyToCall = true;

  /**
   *
   * @returns callback(), or "undefined" depending on if interval ms have ellapsed since last call to debouncedFunction
   */
  function debouncedFunction() {
    if (readyToCall) {
      readyToCall = false;

      timer = setTimeout(() => {
        readyToCall = true;
      }, interval);

      return callback();
    } else {
      // when debouncedFunction is not ready to be called,the timer running from the previous call should be reset—making it "debouced three seconds from every call", instead of "debounded three seconds from every successful call"
      clearTimeout(timer);

      timer = setTimeout(() => {
        readyToCall = true;
      }, interval);

      return "unsucessful";
    }
  }

  return debouncedFunction;
}

function sayHi() {
  return "hi";
}

const debouncedSayHi = debounce(sayHi, 3000);

/* tests */

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

// ?? using iterm to run file, there is a second pause in between when cb for last setTimeout? I would expect it to just cut out right there
