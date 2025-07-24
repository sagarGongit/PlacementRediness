function outerFunction() {
  let message = "Hello";
  return function innerFunction() {
    console.log(message);
  };
}
let res = outerFunction();
res();
