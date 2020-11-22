const table = document.getElementsByTagName("table")[0];
const select = document.getElementsByTagName("select")[0];
const button = document.getElementsByTagName("button")[0];

let chosenColor = "maize";

button.addEventListener("click", makeMultipleRows);
table.addEventListener("click", colorize);
table.addEventListener("mousedown", addMouseOver);
table.addEventListener("mouseup", removeMouseOver);
select.addEventListener("change", pickColor);

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 70; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}

function removeElement() {
  while (table.firstChild) {
    table.removeChild(table.lastChild);
  }
}

function makeMultipleRows() {
  if (table.children.length) {
    console.log("table.children.length=>", table.children.length);
    removeElement();
  } else {
    for (let i = 0; i < 10; i++) {
      makeRow();
      console.log("table.children.length", table.children.length);
    }
    button.innerText = "Reset";
  }
}

function colorize(event) {
  const target = event.target;
  if (target.tagName !== "TD") {
    return;
  }
  if (target.className === chosenColor) {
    target.className = "";
  } else {
    target.className = chosenColor;
  }
}

function pickColor(event) {
  chosenColor = event.target.value;
}

function addMouseOver() {
  table.addEventListener("mouseover", colorize);
}

function removeMouseOver() {
  table.removeEventListener("mouseover", colorize);
}
// function removeElement(elementId) {
//   // Removes an element from the document
//   var element = document.getElementById(elementId);
//   element.parentNode.removeChild(element);
// }
