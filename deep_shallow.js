function deepClone(obj) {
  let deepClone = JSON.stringify(obj);
  let shallow = JSON.parse(deepClone);
  let shallowCopy = {
    name: "Sagar",
    hobbies: [...shallow.hobbies, "Swimming"],
  };
  return shallowCopy;
}
let originalCopy = {
  name: "Alice",
  hobbies: ["reading", "traveling"],
};
console.log(originalCopy); // original
console.log(deepClone(originalCopy)); // shallow
