let gameBoard = document.querySelectorAll(".cell");
const resetBtn = document.querySelector("#reset");
const humanPlayer = "X";
const cpu = "O";
//
startEngine();
resetBtn.addEventListener("click", () => boardReset(gameBoard));
///main function
function startEngine() {
  humanPlayerClick();
}

//looping through the board to find out unoccupied places
//PS : board should always be an array of elements!
console.log(unoccupiedSpaces());
function unoccupiedSpaces() {
  let spaces = [];
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i].innerHTML === "") {
      spaces.push(Number(gameBoard[i].id));
    }
  }
  return spaces;
}

//function to check who is winning
function checkWhoWins(board, player) {
  if (
    board[0].innerHTML === player &&
    board[1].innerHTML === player &&
    board[2].innerHTML === player
  ) {
    alert(`${player} wins!`);
    return { gamestate: "won", whoWon: player };
  } else if (
    board[3].innerHTML === player &&
    board[4].innerHTML === player &&
    board[5].innerHTML === player
  ) {
    alert(`${player} wins!`);
    return { gamestate: "won", whoWon: player };
  } else if (
    board[6].innerHTML === player &&
    board[7].innerHTML === player &&
    board[8].innerHTML === player
  ) {
    alert(`${player} wins!`);
    return { gamestate: "won", whoWon: player };
  } else if (
    board[0].innerHTML === player &&
    board[3].innerHTML === player &&
    board[6].innerHTML === player
  ) {
    alert(`${player} wins!`);
    return { gamestate: "won", whoWon: player };
  } else if (
    board[1].innerHTML === player &&
    board[4].innerHTML === player &&
    board[7].innerHTML === player
  ) {
    alert(`${player} wins!`);
    return { gamestate: "won", whoWon: player };
  } else if (
    board[2].innerHTML === player &&
    board[5].innerHTML === player &&
    board[8].innerHTML === player
  ) {
    alert(`${player} wins!`);
    return { gamestate: "won", whoWon: player };
  } else if (
    board[0].innerHTML === player &&
    board[4].innerHTML === player &&
    board[8].innerHTML === player
  ) {
    alert(`${player} wins!`);
    return { gamestate: "won", whoWon: player };
  } else if (
    board[2].innerHTML === player &&
    board[4].innerHTML === player &&
    board[6].innerHTML === player
  ) {
    setTimeout(alert(`${player} wins!`), 400);

    return { gameOver: true, whoWon: player };
  }
}

function humanPlayerClick() {
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener("click", () => {
      if (gameBoard[i].textContent !== "") {
        alert("Space already occupied! Please play a valid move.");
        return;
      } else {
        gameBoard[i].innerHTML = "X";
        gameBoard[i].style.background = "#28c202";
        checkWhoWins(gameBoard, humanPlayer);
        //calling computerTurn fuction just after user clicks the cell;
        computerTurn();
        return;
      }
    });
  }
}
//computerTurn function makes ai play its move;
function computerTurn() {
  let spaces = unoccupiedSpaces();
  let static = spaces[Math.floor(Math.random() * spaces.length)];
  gameBoard[static].textContent = "O";
  gameBoard[static].style.background = "#e30505";
  checkWhoWins(gameBoard, cpu);
}

//reset the board after win and after draw or when the reset btn clicked
function boardReset(board) {
  for (let i = 0; i < board.length; i++) {
    board[i].textContent = "";
    board[i].style.background = "black";
  } 
}
