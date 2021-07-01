/*
Create a function makeHistory that:
  - accepts a number (which will serve as a limit),
  - returns a function (that will accept a string). 

  The returned function will:
    - save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). 
  
  Every time a string is passed into the function:
    - the function should return that same string with the word 'done' after it (separated by a space). 
    - However, if the string 'undo' is passed into the function, then the function should:
      - delete the last action saved in the history, 
      - return that deleted string with the word 'undone' after (separated by a space). 
      
  If 'undo' is passed into the function and the function's history is empty: 
    - then the function should return the string 'nothing to undo'
*/

function makeHistory(limit) {
  const storage = [];
  // let counter = 0;
  function processString(str) {
    if (storage.length > limit) {
      storage.shift();
    }

    if (str === "undo") {
      if (storage.length === 0) {
        return "Nothing to undo!";
      }
      console.log(storage);

      let poppedEl = storage.pop();

      console.log(storage);
      return `${poppedEl} undone`;
    } else {
      storage.push(str);
      return `${str} done`;
    }
  }

  return processString;
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions("jump")); // => should log 'jump done'
console.log(myActions("undo")); // => should log 'jump undone'
console.log(myActions("walk")); // => should log 'walk done'
console.log(myActions("code")); // => should log 'code done'
console.log(myActions("pose")); // => should log 'pose done'
console.log(myActions("undo")); // => should log 'pose undone'
console.log(myActions("undo")); // => should log 'code undone'
console.log(myActions("undo")); // => should log 'nothing to undo'
