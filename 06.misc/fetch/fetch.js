///////////////////////////////////////////////////////////
// Get data using fetch and passing it to another function

async function getUserData() {
  try {
    const data = await fetch(
      "https://614eabf9b4f6d30017b482be.mockapi.io/users",
      { method: "GET" }
    );

    const users = await data.json();
    return users;
  } catch (err) {
    console.log("Error while fetching data: ", err);
  }
}

async function processData() {
  console.log("=== Process ASYNC function data ===");
  let users;

  // The data fetched will accessible only within the "then" block 
  getUserData().then(data => {
    users = data;
    console.log(users);
  });

  // The data fetched using "await" can be accessed throughout the function
  const userData = await getUserData();
  console.log(userData);
}

window.onload = processData();