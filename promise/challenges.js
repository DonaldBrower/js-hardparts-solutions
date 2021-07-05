/* ex 2 */
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolved"), 1000);
});

promise.then((res) => console.trace(res));

/* ex 3 */
const promise2 = new Promise((resolve, reject) => {
  reject("Rejected!");
});
promise2.catch((e) => console.error(e));

/* ex 4 */
const promise3 = new Promise((resolve, reject) => {
  resolve("Promise has been resolved");
});

// Uncomment the lines below when ready
promise.then(() => console.trace("Promise has been resolved!"));
console.log("I'm not the promise!");

/* ex5 */
const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Deplayed ${ms}ms`);
    }, ms);
  });
};

delay(1000).then((res) => console.log(res));

/* ex6 */
const secondPromise = new Promise((resolve, resject) => {
  resolve("Second!");
});

const firstPromise = new Promise((resolve, resject) => {
  resolve(secondPromise);
});

firstPromise.then((res) => res).then((res) => console.log(res));

/* ex7 */
const fakePeople = [
  { name: "Rudolph", hasPets: false, currentTemp: 98.6 },
  { name: "Zebulon", hasPets: true, currentTemp: 22.6 },
  { name: "Harold", hasPets: true, currentTemp: 98.3 },
];

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

const getAllData = () => {
  fakeAPICall(0).then((res) => console.log(res));
  fakeAPICall(1).then((res) => console.log(res));
  fakeAPICall(2).then((res) => console.log(res));
};

getAllData();
