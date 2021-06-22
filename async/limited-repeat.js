/*
Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this. 
*/

limitedRepeat();

function limitedRepeat() {
  let counter = 0;
  let clock = setInterval(() => {
    if (counter >= 4) {
      clearInterval(clock);
    }
    console.log("hi");
    counter++;
  }, 1000);
}
