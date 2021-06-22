/*
Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds. 
*/
helloGoodbye();
function helloGoodbye() {
  console.log("Hello");
  setTimeout(() => {
    console.log("Gooooodbye");
  }, 2000);
}
