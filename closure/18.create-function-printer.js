// CHALLENGE 2
const createFunctionPrinter = (s) => {
  return () => {
    console.log(s);
  };
};
// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter("sample");
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter("hello");
printHello(); // => should console.log('hello');
