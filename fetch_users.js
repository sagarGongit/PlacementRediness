fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let users = data.map((val) => val.name);
    console.log(users);
  })
  .catch((error) => console.log(error));
