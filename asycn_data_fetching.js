function fetchUserData(callback) {
  console.log("Fetching user data...");

  callback();
}
function callback1() {
  console.log("User data received");
}
setTimeout(() => {
  fetchUserData(callback1);
}, 1000);

function fetchUserPosts(callback) {
  console.log("Fetching user posts...");

  callback();
}

function callback2() {
  console.log("User posts received");
  console.log("All data loaded successfully!");
}
setTimeout(() => {
  fetchUserPosts(callback2);
}, 1500);

/*
"Fetching user data..."
(1 second delay)
"User data received"
"Fetching user posts..."
(1.5 second delay)
"User posts received"
"All data loaded successfully!"
*/
