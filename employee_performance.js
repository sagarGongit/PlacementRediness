const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },

  { name: "Bob", tasksCompleted: 4, rating: 4.0 },

  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },

  { name: "David", tasksCompleted: 10, rating: 4.9 },

  { name: "Eve", tasksCompleted: 7, rating: 2.8 },
];

let res = employees
  .filter((val) => val.tasksCompleted > 5)
  .map((val) => {
    return {
      performance:
        val.rating >= 4.5
          ? "Excellent"
          : val.rating >= 3 && val.rating <= 4.5
          ? "Good"
          : "Needs Improvement",
      name: val.name,
    };
  })
  .sort((a, b) => a.performance - b.performance);
console.log(res);



// Output: [

// { name: "David", performance: "Excellent" },

// { name: "Alice", performance: "Excellent" },

// { name: "Charlie", performance: "Good" }

// ]
