function checkEvenNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(`${num} is even`);
    } else {
      reject(`${num} is odd`);
    }
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

checkEvenNumber(4).then(console.log).catch(console.error); // Expected: "4 is even"
checkEvenNumber(5).then(console.log).catch(console.error); // Expected: "5 is odd or invalid"
