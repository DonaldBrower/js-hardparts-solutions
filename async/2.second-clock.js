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
