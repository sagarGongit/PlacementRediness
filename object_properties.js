function personInfo() {
  console.log(this.name + " " + this.age);
}

let info = { name: "Sagar", age: 28 };

personInfo.call(info);
