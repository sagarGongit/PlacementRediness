function outerFunction() {
  let message = "good morning";
  return function innerFunction() {
    return message;
  };
}

const printMsg = outerFunction();
console.log(printMsg());
