function everyXsecsForYsecs(func, interval, duration) {
  let elapsed = 0;
  let clock = setInterval(() => {
    if (elapsed >= duration) {
      clearInterval(clock);
    }
    func();
    elapsed += interval;
  }, interval);
}

function theEnd() {
  console.log("This is the end!");
}

everyXsecsForYsecs(theEnd, 1000, 20000);
// should call theEnd every 2 seconds, for 20 seconds
