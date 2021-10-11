function a() {
  var b = 10;
  c();

  function c() {
    console.log(b);
  }
}

a();

var count = 0;
document.getElementById("btn").addEventListener("click", () => {
  console.log("Button Clicked!");
  const para = document.createElement("p");
  para.innerHTML = `<p>Button Clicked: ${++count} times!</p>`;
  document.querySelector(".msg").appendChild(para);
});
 