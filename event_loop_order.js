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
