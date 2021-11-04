const gameBoard = document.querySelectorAll(".cell");
const cells = Object.keys(gameBoard);
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  resetBoard();
});
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //second combo
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //third combo
  [0, 4, 8],
  [2, 4, 6],
];
const playerOccupiedCells = [];
const computerOccupiedCells = [];
// Starting the game
engineStart();
//main function which calls other functions required for the game to work
function engineStart() {
  //all functions are called under userClick function for time being
  //it may shift to engineStart in future
  userClick();
}
///checking for userclicks
//currently user will be X
function userClick() {
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener("click", () => {
      if (gameBoard[i].textContent !== "") {
        alert("already occupied!");
      } else {
        gameBoard[i].innerHTML = "X";
        gameBoard[i].style.background = "#419902";
        playerOccupiedCells.push(Number(gameBoard[i].id));

        //calling computer function after user clicks
        computer();
        if (
          computerOccupiedCells.length !== 9 &&
          playerOccupiedCells.length !== 9
        ) {
          setTimeout(() => {
            checkWinner();
          }, 250);
        }
      }
    });
  }
}
function resetBoard() {
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].innerHTML = "";
    gameBoard[i].style.background = "black  ";
  }
}
function computer() {
  let unoccupied = [];

  for (let a = 0; a < gameBoard.length; a++) {
    if (gameBoard[a].innerHTML == "") {
      unoccupied.push(Number(gameBoard[a].id));
    }
  }
  for (let j = 0; j < unoccupied.length; j++) {
    let randomNum =
      unoccupied[
        Math.abs(
          Math.floor(Math.random() * unoccupied.length + unoccupied.length) -
            unoccupied.length
        )
      ];
    gameBoard[randomNum].innerHTML = "O";
    gameBoard[randomNum].style.background = "red";
    computerOccupiedCells.push(randomNum);

    return;
  }
}

//check who wins
function checkWinner() {
  if (
    (gameBoard[0].textContent === "X" &&
      gameBoard[1].textContent === "X" &&
      gameBoard[2].textContent === "X") ||
    (gameBoard[3].textContent === "X" &&
      gameBoard[4].textContent === "X" &&
      gameBoard[5].textContent === "X") ||
    (gameBoard[6].textContent === "X" &&
      gameBoard[7].textContent === "X" &&
      gameBoard[8].textContent === "X") ||
    (gameBoard[0].textContent === "X" &&
      gameBoard[3].textContent === "X" &&
      gameBoard[6].textContent === "X") ||
    (gameBoard[1].textContent === "X" &&
      gameBoard[4].textContent === "X" &&
      gameBoard[7].textContent === "X") ||
    (gameBoard[2].textContent === "X" &&
      gameBoard[5].textContent === "X" &&
      gameBoard[8].textContent === "X") ||
    (gameBoard[0].textContent === "X" &&
      gameBoard[4].textContent === "X" &&
      gameBoard[8].textContent === "X") ||
    (gameBoard[2].textContent === "X" &&
      gameBoard[4].textContent === "X" &&
      gameBoard[6].textContent === "X")
  ) {
    alert("Player Wins!!");
    resetBoard();
    return;
  } else if (
    (gameBoard[0].textContent === "O" &&
      gameBoard[1].textContent === "O" &&
      gameBoard[2].textContent === "O") ||
    (gameBoard[3].textContent === "O" &&
      gameBoard[4].textContent === "O" &&
      gameBoard[5].textContent === "O") ||
    (gameBoard[6].textContent === "O" &&
      gameBoard[7].textContent === "O" &&
      gameBoard[8].textContent === "O") ||
    (gameBoard[0].textContent === "O" &&
      gameBoard[3].textContent === "O" &&
      gameBoard[6].textContent === "O") ||
    (gameBoard[1].textContent === "O" &&
      gameBoard[4].textContent === "O" &&
      gameBoard[7].textContent === "O") ||
    (gameBoard[2].textContent === "O" &&
      gameBoard[5].textContent === "O" &&
      gameBoard[8].textContent === "O") ||
    (gameBoard[0].textContent === "O" &&
      gameBoard[4].textContent === "O" &&
      gameBoard[8].textContent === "O") ||
    (gameBoard[2].textContent === "O" &&
      gameBoard[4].textContent === "O" &&
      gameBoard[6].textContent === "O")
  ) {
    alert("Computer Wins!!");
    resetBoard();
    return;
  }
}
