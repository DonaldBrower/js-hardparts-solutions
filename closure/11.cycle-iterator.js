const cycleIterator = (arr) => {
  let i = 0;
  return () => {
    return arr[i++];
  };
};

const iterator = cycleIterator([1, 2, 3]);

console.log(iterator());
console.log(iterator());
console.log(iterator());
console.log(iterator());
