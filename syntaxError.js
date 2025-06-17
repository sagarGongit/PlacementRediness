const checkout = {
  items: [],

  total: 0,

  addItem(item) {
    if (typeof item.price !== "number" || isNaN(item.price)) {
      item.price = +item.price;
    }

    this.items.push(item);

    this.total += item.price;
  },

  getTotal() {
    return { Total: Number(this.total.toFixed(2)) };
  },
};

checkout.addItem({ name: "Coffee Maker", price: "99.95" });

checkout.addItem({ name: "Milk", price: 3.5 });

console.log(checkout.getTotal()); // issue fixed
