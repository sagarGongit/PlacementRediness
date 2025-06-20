const duration = 3000;
function timer(duration, callback) {
  setTimeout(() => {
    callback();
  }, duration);
}
function onComplete() {
  console.log(`Timer of ${duration} ms finished`);
}

timer(duration, onComplete);
