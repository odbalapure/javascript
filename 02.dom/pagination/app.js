let users;
let tbody = document.getElementById("tbody");
let pageSize = 10;
let currentPage = 0;
let totalPages = 100 / pageSize;

fetch(
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
)
  .then((res) => res.json())
  .then((result) => {
    users = result;
    console.log(users);
    for (let i = 0; i < 10; i++) {
      insertNewRow(users[i]);
    }
  });

function insertNewRow(data) {
  let row = tbody.insertRow();
  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);
  cell0.innerHTML = data.id;
  cell1.innerHTML = data.name;
  cell2.innerHTML = data.email;
}

function changePage(direction) {
  if (direction == "next" && currentPage < totalPages - 1) {
    currentPage++;
    printRecords();
  } else if (direction == "prev" && currentPage > 0) {
    currentPage--;
    printRecords();
  } else if (direction == "jump") {
    currentPage = document.getElementById("search").value;
    printRecords();
  }
}

function printRecords() {
  tbody.innerHTML = "";
  for (
    let i = currentPage * pageSize;
    i < currentPage * pageSize + pageSize;
    i++
  ) {
    insertNewRow(users[i]);
  }
}
