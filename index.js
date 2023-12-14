// class Player {
//   constructor(id, symbol, name) {
//     this.id = id;
//     this.symbol = symbol;
//     this.name = name;
//   }
// }
const player1 = "X";
const player2 = "O";

// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// const p1 = new Player(1, "X", "F1nn");
// const p2 = new Player(2, "O", "FriesMonster");

// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
  }
  // The code here will be exectued if you press on OK button that will pop on the window
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
//fillButton(1, "X");
//fillButton(9, "O");
fillButton(1, player1);
fillButton(9, player2);

// fillButton(1, p1.symbol);
// fillButton(9, p2.symbol);

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI = User Interface
 */
// let currentPlayer = p2;
// let state = [p1.id, "", "", "", p1.id, p1.id, "", p2.id, p2.id];
let currentPlayer = player2;
let state = ["", "", "", "", "", "", "", "", ""];

function clickButton(index) {
  //console.log(p1.name);
  console.log(player2);

  console.log(`Button number ${index} is clicked`);
  if (currentPlayer == player1) {
    fillButton(index, "X");
    currentPlayer = player2;
  } else if (currentPlayer == player2) {
    fillButton(index, "O");
    currentPlayer = player1;
  }
  // currentPlayer = p1;
  // state.fill(p2.symbol);
  fillButton(index, currentPlayer);
}
console.log(state);
// Your main code here.
//const checkWinner = winMap.find((comb) => moves.some);

if (isWinner()) {
  alert(`${currentPlayer} wins!`);
}
/**
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
