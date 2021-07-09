const once = (cb) => {
  let cache;
  return (...args) => {
    if (!cache) cache = cb(...args);
    return cache;
  };
};

// /*** Uncomment these to check your work! ***/
const onceFunc = once((n) => n * 2);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6
