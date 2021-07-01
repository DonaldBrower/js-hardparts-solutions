/*
  SecondClock class has two methods:
    start()
    reset()

  start():
    upon being called, calls this.cb on an argument every second
    the argument to this.cb is current seconds "value"
  
    the callback is invoked every second on the "seconds hand" of the clock. always start from 1 and dont utilize the seconds value of the current computer clock time

      the first "tick" with value 1 occurs 1 second after the initial secondClock is called

      the second "tick" with value 2 occurs 2 seconds after the initial secondClock is called

      ...

    reset():
      upon being called, stops the clock and resets time back to the beginning
*/
class SecondClock {
  constructor(cb) {
    // ADD CODE HERE
    this.cb = cb;
    this.secondsHand = 0;
    this.clock = undefined;
  }
  start() {
    this.clock = setInterval(() => {
      this.cb(++this.secondsHand);
    }, 1000);
  }
  reset() {
    clearInterval(this.clock);
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = new SecondClock((val) => {
  console.log(val);
});
console.log("Started Clock.");
clock.start();
setTimeout(() => {
  clock.reset();
  console.log("Stopped Clock after 6 seconds.");
}, 6000);
