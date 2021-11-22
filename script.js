let counter = 0;
// let incrementBtn = document.getElementById("btn-increment");
let count = document.querySelector("h2");
// let saveBtn = document.getElementById("btn-save");
let savedVal = 0;
let pSaved = document.querySelector("h3");

function increment() {
  counter += 1;
  count.innerText = counter;
  console.log(counter);
}

function degrease() {
  counter -= 1;
  if (counter < 0) {
    counter = 0;
  }
  count.innerText = counter;
  console.log(counter);
}

function save() {
  //   savedVal = " " + counter + " -";
  pSaved.innerHTML += "<br>";
  pSaved.innerText += counter;
  counter = 0;
  count.innerText = 0;
}

function test() {
  pSaved.innerHTML = "Previous entires:";
}
