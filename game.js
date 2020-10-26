let array = [];
let gameCounter = 0;

const makeButton = (r, c) =>
  `<div class='xobutton' id='${[
    r,
    c,
  ]}' onclick='updateButton(${r},${c})'></div>`;

const createGridBody = () => {
  const makeRow = (innerHTML, index) =>
    `<div id='row${index}' class='row'>` + innerHTML + "</div>";
  return array.map((ROW, r) => {
    console.log(ROW, r);
    // inside row
    return makeRow(ROW.map((_, c) => makeButton(r, c)).join(""), r);
  });
};

const initialize = () => {
  array = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  console.log("CREATE GTRID BOD?y", createGridBody());
  document.getElementById("container").innerHTML = createGridBody().join("");
  gameCounter = 0;
};

const updateGrid = (id) => {
  document.getElementById(id);
};

const updateButton = (r, c) => {
  let button = document.getElementById(`${r},${c}`);
  if (button.innerText.includes("X") || button.innerText.includes("O")) {
    return;
  }
  const currentPlayer = gameCounter % 2 == 0 ? "X" : "O";
  const color = currentPlayer == "X" ? "green" : "red";
  array[r][c] = currentPlayer;

  button.innerHTML = array[r][c];
  button.style.color = color;

  if (checkWin(currentPlayer)) {
    if (confirm(`${currentPlayer} WINS!`)) {
      initialize();
    }
  } else if (gameCounter == 8) {
    if (confirm("DRAW!\nWanna play again?")) {
      initialize();
    }
  }
  gameCounter++;
};

const checkWin = (p) => {
  console.log(array);
  const r1 = [array[0][0], array[0][1], array[0][2]].join() == `${p},${p},${p}`;
  const r2 = [array[1][0], array[1][1], array[1][2]].join() == `${p},${p},${p}`;
  const r3 = [array[2][0], array[2][1], array[2][2]].join() == `${p},${p},${p}`;

  const c1 = [array[0][0], array[1][0], array[2][0]].join() == `${p},${p},${p}`;
  const c2 = [array[0][1], array[1][1], array[2][1]].join() == `${p},${p},${p}`;
  const c3 = [array[0][2], array[1][2], array[2][2]].join() == `${p},${p},${p}`;

  const d1 = [array[0][0], array[1][1], array[2][2]].join("") == `${p}${p}${p}`;
  const d2 = [array[0][2], array[1][1], array[2][0]].join("") == `${p}${p}${p}`;

  return r1 || r2 || r3 || c1 || c2 || c3 || d1 || d2;
};

initialize();
