const categories = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys",
];
const res = {};
for (let cat of categories) {
  res[cat] = (res[cat] || 0) + 1;
}
console.log(Object.entries(res).sort());

// Output: { electronics: 2, clothing: 2, toys: 3 }
