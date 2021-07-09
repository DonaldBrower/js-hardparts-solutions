const createFunction = () => {
  return () => {
    console.log("hello");
  };
};

const myFunc = createFunction();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
