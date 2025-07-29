//data handling with promises
function fetchData() {
  return new Promise((resolve, reject) => {
    if (Math.random(10) > 0.5) {
      setTimeout(() => {
        resolve("Data Fetched Successfully !");
      }, 2000);
    } else {
      reject("Error fetching data");
    }
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("error : " + err);
    });
}

fetchData();

// data handling with async awaits

async function fetchDataHandler() {
  try {
    await fetchData();
  } catch (error) {
    console.log(error + "something went wrong");
  }
}

fetchDataHandler();
