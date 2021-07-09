const rollCall = (names) => {
  let i = 0;
  return () => {
    if (!names[i]) return "everyone is accounted for";
    return names[i++];
  };
};

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
console.log(rollCaller()); // => should log 'Victoria'
console.log(rollCaller()); // => should log 'Juan'
console.log(rollCaller()); // => should log 'Ruth'
console.log(rollCaller()); // => should log 'Everyone accounted for'
