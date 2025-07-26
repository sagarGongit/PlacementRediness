const original = { name: "Alice", hobbies: ["reading", "traveling"] };
const Deepcopy = JSON.parse(JSON.stringify(original));
Deepcopy.hobbies.push("coding");
console.log(original);
console.log(Deepcopy);

// Example Output (After modifying the clone):

// Original: { name: "Alice", hobbies: ["reading", "traveling"] }

// Clone: { name: "Alice", hobbies: ["reading", "traveling", "coding"] }
