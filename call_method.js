let person = {
  name: "sagar",
  age: 25,
};

function personInfo() {
  return `Hello ! ${this.name} you are ${this.age} year old.`;
}

console.log(personInfo.call(person,null));

