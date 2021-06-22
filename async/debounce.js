function debounce(callback, interval) {
  let readyToCall = true;
  let timer = undefined;

  const debouncedFunction = () => {
    if (readyToCall) {
      readyToCall = false;
      timer = setTimeout(() => {
        readyToCall = true;
      }, interval);

      return callback();
    } else {
      // clearTimeout, because there is still a timer running
      // from the last time debouncedFunction was called
      clearTimeout(timer);

      timer = setTimeout(() => {
        readyToCall = true;
      }, interval);

      return undefined;
    }
  };

  return debouncedFunction;
}

function sayHi() {
  return "hi";
}

const debouncedSayHi = debounce(sayHi, 3000);

console.log(debouncedSayHi()); // -> 'hi'
setTimeout(function () {
  console.log(debouncedSayHi());
}, 2000); // -> undefined
setTimeout(function () {
  console.log(debouncedSayHi());
}, 4000); // -> undefined
setTimeout(function () {
  console.log(debouncedSayHi());
}, 8000); // -> 'hi'
