const gameBoard = document.querySelectorAll(".cell");
const cells = Object.keys(gameBoard);
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click',() =>{
  for(let i = 0; i < gameBoard.length ; i++){
    gameBoard[i].innerHTML = "";
    gameBoard[i].style.background = "black  "
  }
})
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
        console.log(playerOccupiedCells);

        //calling computer function after user clicks
        computer();
        if (
          computerOccupiedCells.length !== 9 &&
          playerOccupiedCells.length !== 9
        ) {
          checkWinner();
        }
      }
    });
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
    console.log(computerOccupiedCells, playerOccupiedCells);
    return;
  }
}

//check who wins
function checkWinner() {
  let sortedPlayer = playerOccupiedCells.sort(function (a, b) {
    return a - b;
  });
  let sortedComp = computerOccupiedCells.sort(function (a, b) {
    return a - b;
  });
  console.log(sortedPlayer, sortedComp);
  for (let i = 0; i < winCombos.length; i++) {
    for (let j = 0; j < sortedPlayer.length; j++) {
      if (
        sortedPlayer[0] === winCombos[i][0] &&
        sortedPlayer[1] === winCombos[i][1] &&
        sortedPlayer[2] === winCombos[i][2]
      ) {
        alert("player wins");
        return;
      } else if (
        sortedPlayer[3] === winCombos[i][0] &&
        sortedPlayer[4] === winCombos[i][1] &&
        sortedPlayer[5] === winCombos[i][2]
      ) {
        alert("player wins");
        return;
      } else if (
        sortedPlayer[6] === winCombos[i][0] &&
        sortedPlayer[7] === winCombos[i][1] &&
        sortedPlayer[8] === winCombos[i][2]
      ) {
        alert("player wins");
        return;
      } else if (
        sortedPlayer[0] === winCombos[i][0] &&
        sortedPlayer[4] === winCombos[i][1] &&
        sortedPlayer[8] === winCombos[i][2]
      ) {
        alert("player wins");
        return;
      } else if (
        sortedPlayer[2] === winCombos[i][0] &&
        sortedPlayer[4] === winCombos[i][1] &&
        sortedPlayer[6] === winCombos[i][2]
      ) {
        alert("player wins");
        return;
      } else if (
        sortedPlayer[0] === winCombos[i][0] &&
        sortedPlayer[3] === winCombos[i][1] &&
        sortedPlayer[6] === winCombos[i][2]
      ) {
        alert("player wins");
        return;
      } else if (
        sortedPlayer[1] === winCombos[i][0] &&
        sortedPlayer[4] === winCombos[i][1] &&
        sortedPlayer[7] === winCombos[i][2]
      ) {
        alert("player wins");
        return;
      } else if (
        sortedPlayer[2] === winCombos[i][0] &&
        sortedPlayer[5] === winCombos[i][1] &&
        sortedPlayer[8] === winCombos[i][2]
      ) {
        alert("player wins");
        return;
      }
      //check for comp
      if (
        sortedComp[0] === winCombos[i][0] &&
        sortedComp[1] === winCombos[i][1] &&
        sortedComp[2] === winCombos[i][2]
      ) {
        alert("computer wins");
        return;
      } else if (
        sortedComp[3] === winCombos[i][0] &&
        sortedComp[4] === winCombos[i][1] &&
        sortedComp[5] === winCombos[i][2]
      ) {
        alert("computer wins");
        return;
      } else if (
        sortedComp[6] === winCombos[i][0] &&
        sortedComp[7] === winCombos[i][1] &&
        sortedComp[8] === winCombos[i][2]
      ) {
        alert("computer wins");
        return;
      } else if (
        sortedComp[0] === winCombos[i][0] &&
        sortedComp[4] === winCombos[i][1] &&
        sortedComp[8] === winCombos[i][2]
      ) {
        alert("computer wins");
        return;
      } else if (
        sortedComp[2] === winCombos[i][0] &&
        sortedComp[4] === winCombos[i][1] &&
        sortedComp[6] === winCombos[i][2]
      ) {
        alert("computer wins");
        return;
      } else if (
        sortedComp[0] === winCombos[i][0] &&
        sortedComp[3] === winCombos[i][1] &&
        sortedComp[6] === winCombos[i][2]
      ) {
        alert("computer wins");
        return;
      } else if (
        sortedComp[1] === winCombos[i][0] &&
        sortedComp[4] === winCombos[i][1] &&
        sortedComp[7] === winCombos[i][2]
      ) {
        alert("computer wins");
        return;
      } else if (
        sortedComp[2] === winCombos[i][0] &&
        sortedComp[5] === winCombos[i][1] &&
        sortedComp[8] === winCombos[i][2]
      ) {
        alert("computer wins");
        return;
      }
    }
  }
}
