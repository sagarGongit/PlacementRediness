const userProfile = {
  name: "Alice",

  age: 28,

  details: function () {
    return `${this.name} is ${this.age} years old.`;
  },

  updateAge(newAge) {
    if (newAge <= 0 || typeof newAge !== "number") {
      console.log("Invalid age.");

      return;
    }

    this.age = newAge;

    return this.details;
  },
};

userProfile.updateAge(30);

console.log(userProfile.details()); // Expected: "Alice is 30 years old."
