// global variable
let color = "back";
let click = true;

document.querySelector("body").addEventListener("click", () => {
  click = !click;
  // if click is true right now, reassign the evalue of "false" to click.
  // if click is false, reassign the value to true.
});

function setCanvas(size) {
  let canvas = document.querySelector(".canvas");
  let squares = canvas.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    canvas.insertAdjacentElement("beforeend", square);
  }
}

function changeSize(input) {
  document.querySelector(".canvasSize").textContent = `${input} x ${input}`;
  setCanvas(input);
}

function colorSquare() {
  if (click) {
    if (color === "rainbow") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function resetCanvas() {
  let canvas = document.querySelector(".canvas");
  let squares = canvas.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

setCanvas(16);
