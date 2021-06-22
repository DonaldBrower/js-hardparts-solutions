/*
Thinking point (no writing code necessary for this challenge): Inspect the code given to you in Challenge 1. In what order should the console logs come out? Howdy first or Partnah first? 
*/

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}

testMe(); // what order should these log out? Howdy or Partnah first?

/* ANSWER

> Partnah
> Howdy

because setTimeout is put into the callback queue, it cannot execute it's code until all the code in the global call stack is run, because you cannot have asynchronous actions happening while synchronous code is being run, because that's just not how it works