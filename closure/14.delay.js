const delay = (cb, wait) => {
  setTimeout(() => {
    cb();
  }, wait);
};

delay(() => console.log("i've been waiting"), 3000);
