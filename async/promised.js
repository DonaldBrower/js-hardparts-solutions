function promised(val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val);
    }, 4000);
  });
}

const createPromise = promised("wait for it...");
createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds
