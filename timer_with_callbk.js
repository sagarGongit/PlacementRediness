function timer(duration, callbk) {
  console.log("timer start...");
  setTimeout(() => {
    callbk(duration);
  }, duration);
}

function onComplete(duration) {
  console.log(`Timer of ${duration} ms finished`);
  console.log("timer end.");
}

timer(2000,onComplete)
