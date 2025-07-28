function timer(duration, callback) {
  console.log(`Timer Started`);
  setTimeout(() => {
    callback(duration);
  }, duration);
}
function onComplete(duration) {
  console.log(`Timer of ${duration} ms finished`);
  console.log(`Timer End`);
}
timer(2000, onComplete);
