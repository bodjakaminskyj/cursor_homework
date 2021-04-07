function getRandomColor(){
  let colorNunber = Math.round(Math.random() * (10000-100)+100);
  return "#"+colorNunber;
}

export function generateBlocks(lengthArrays){
  
  const space = document.querySelector(".squareSpace");
  for (let i = 0; i < lengthArrays; i++) {
    const row = document.createElement("div");
    row.className = "row";
    row.style.display = "flex";
    space.appendChild(row);
    for (let j = 0; j < lengthArrays; j++) {
      const square = document.createElement("div");
      square.className = "square";
      square.style.cssText = "width: 50px; height: 50px; display: inline-block"
      square.style.backgroundColor = getRandomColor()
      row.appendChild(square)
    }
  }
}

function changeColor() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(function (square) {
    square.style.backgroundColor = getRandomColor();
  });
}
function generateBlocksInterval(time) {
  setInterval(() => changeColor(), time);
}

