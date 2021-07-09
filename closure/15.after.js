const after = (n, cb) => {
  let i = 1;
  return () => {
    if (i >= n) cb();
    i++;
  };
};

const called = function () {
  console.log("hello");
};
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed
afterCalled(); // => 'hello' is printed
afterCalled(); // => 'hello' is printed
