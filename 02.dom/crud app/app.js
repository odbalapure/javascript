// Helper function to fetch user data
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

// Capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Clear all inputs
function clearHandler() {
  document.getElementById("username").setAttribute("value", "");
  document.getElementById("image").setAttribute("value", "");
  document.getElementById("searchUser").setAttribute("value", "");
}

// Fetch list of users from mock api
async function getUsers() {
  // const data = await fetch(
  //   "https://614eabf9b4f6d30017b482be.mockapi.io/users",
  //   { method: "GET" }
  // );

  // process the data
  // const users = await data.json();

  const users = await getUserData();
  console.log("User list: ", users);

  // Create user card
  let createUserCard = (name, image, id) => {
    return `
      <div class="user">
        <img src="${image}"/> 
        <p>${name}</p>
        <button type="button" class="btn btn-danger" onclick=deleteHandler(${id})>Delete</button>
      </div>
    `;
  };

  // *** NOTE: If we delete/fetch elements, then we need the updated data not the stale one
  // If not done then the old items will be appended with the new ones
  document.querySelector(".user-list").innerHTML = "";

  // Iterate over the result and create a user card
  users.forEach((user) => {
    let div = document.createElement("div");
    div.innerHTML = createUserCard(user.name, user.avatar, user.id);
    document.querySelector(".user-list").append(div);
  });
}

// Delete a user and remove the user card from the web page
async function deleteHandler(id) {
  console.log("User id", id);
  await fetch(`https://614eabf9b4f6d30017b482be.mockapi.io/users/${id}`, {
    method: "DELETE",
    header: {
      "Content-Type": "application/json",
    },
  });

  getUsers();
}

// Create a user
async function createHandler() {
  const nameInput = document.getElementById("username").value;
  const avatarInput = document.getElementById("image").value;

  console.log(nameInput, avatarInput);

  await fetch(`https://614eabf9b4f6d30017b482be.mockapi.io/users`, {
    method: "POST",
    body: JSON.stringify({
      name: nameInput,
      avatar: avatarInput,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  getUsers();
}

// Get data of a single user
async function getUser() {
  let username = document.getElementById("searchUser").value;
  const userObj = {
    id: "",
    name: "",
    avatar: "",
  };

  // const data = await fetch(
  //   "https://614eabf9b4f6d30017b482be.mockapi.io/users",
  //   { method: "GET" }
  // );

  // const users = await data.json();
  const users = await getUserData();

  users.forEach((user) => {
    let pattern = user.name;
    username = capitalizeFirstLetter(username);

    if (pattern.match(username)) {
      userObj.id = user.id;
      userObj.name = pattern.match(username).input;
      userObj.avatar = user.avatar;
    }
  });

  // NOTE: This will add the user and url value to the inputs,
  //  the values will not be overriden you have to reload the page to clear the inputs
  // document.getElementById("username").value = userObj.name;
  // document.getElementById("image").value = userObj.avatar;

  document.getElementById("username").setAttribute("value", userObj.name);
  document.getElementById("image").setAttribute("value", userObj.avatar);

  return userObj;
}

// Edit user data
async function editHandler() {
  const user = await getUser();

  user.name = document.getElementById("username").value;
  user.avatar = document.getElementById("image").value;

  await fetch(`https://614eabf9b4f6d30017b482be.mockapi.io/users/${user.id}`, {
    method: "PUT",
    body: JSON.stringify({
      name: user.name,
      avatar: user.avatar,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  getUsers();
}

window.onload = getUsers();

// Append user name to the page
// const userList = document.querySelector(".user-list");
// userList.innerHTML += `
//   <h2>${user.name}</h2>
// `;
