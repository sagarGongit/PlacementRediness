function fetchData() {
  let flag = Math.floor(Math.random());
  let promises = new Promise((resolve, reject) => {
    if (flag) {
      resolve("Fetched data successfully!");
    } else {
      reject("Error fetching data");
    }
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
  return promises;
}

// console.log(fetchData()); //Promise with a 50% chance of success or failure.

async function fetchDataHandler() {
  try {
    let flag = Math.floor(Math.random());
    let promises = new Promise((resolve, reject) => {
      if (flag) {
        resolve("Fetched data successfully!");
      } else {
        reject("Error fetching data");
      }
    });
    const res = await promises;
    if (res) {
      console.log("Fetched data successfully!");
    } else {
      reject("Error fetching data");
    }
  } catch (error) {
    console.log(error);
  }
}

// fetchDataHandler();  //Promise with a 50% chance of success or failure.
