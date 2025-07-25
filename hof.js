const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
];

let productNames = products.map((val) => val.name);
products.forEach((val) => {
  if (val.price < 50) {
    console.log(`${val.name} price is $${val.price} below $50`);
  } else {
    console.log(`${val.name} price is $${val.price} above $50`);
  }
});


