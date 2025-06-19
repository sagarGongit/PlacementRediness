console.log("Begin");
setTimeout(() => {
  console.log("Timeout Task");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise Task");
});
console.log("End");

// The order should be:
// Begin
// End
// Promise Task
// Timeout Task

// Reason being execute this code in manner because the setTimeout and Promises are asynchronous in nature that's why they will execute later on.
