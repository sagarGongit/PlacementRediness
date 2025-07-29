let taskA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task A completed");
  }, 500);
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

let taskB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task B processed: Task A completed");
  }, 1000);
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

let taskF = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Final result: Task B processed: Task A completed");
  }, 1500);
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));