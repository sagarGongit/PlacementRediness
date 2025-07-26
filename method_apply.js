function multiplyNumbers() {
  console.log(this.a * this.b);
}

const values = { a: 2, b: 4 };
const res = multiplyNumbers.bind(values);
res();
