let gameBoard = document.querySelectorAll(".cell");
const resetBtn = document.querySelector("#reset");
const humanPlayer = "O";
const cpu = "X";
let indexBoard = Array.from(Array(9).keys);
const declareWinner = document.querySelector(".declare-winner");
console.log(declareWinner);
console.log(indexBoard);
//
startEngine();
resetBtn.addEventListener("click", () => boardReset(gameBoard));
///main function
function startEngine() {
  humanPlayerClick();
}

//looping through the board to find out unoccupied places
//PS : board should always be an array of elements!

function unoccupiedSpaces(board) {
  let spaces = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i].innerHTML === "") {
      spaces.push(Number(board[i].id));
    }
  }
  return spaces;
}
// function to check draw
function checkDraw() {
  if (unoccupiedSpaces(gameBoard).length === 0) {
    declareWinner.style.display = "flex";
    declareWinner.style.background = "goldenrod";
    declareWinner.innerHTML = `No one wins! Tie!`
    return true;
  }
}

//function to check who is checkWhoWins
function checkWhoWins(board, player) {
  if (
    board[0].innerHTML === player &&
    board[1].innerHTML === player &&
    board[2].innerHTML === player
  ) {
  popUp(player);
    return true;
  } else if (
    board[3].innerHTML === player &&
    board[4].innerHTML === player &&
    board[5].innerHTML === player
  ) {
  popUp(player);
    return true;
  } else if (
    board[6].innerHTML === player &&
    board[7].innerHTML === player &&
    board[8].innerHTML === player
  ) {
  popUp(player);
    return true;
  } else if (
    board[0].innerHTML === player &&
    board[3].innerHTML === player &&
    board[6].innerHTML === player
  ) {
  popUp(player);
    return true;
  } else if (
    board[1].innerHTML === player &&
    board[4].innerHTML === player &&
    board[7].innerHTML === player
  ) {
  popUp(player);
    return true;
  } else if (
    board[2].innerHTML === player &&
    board[5].innerHTML === player &&
    board[8].innerHTML === player
  ) {
  popUp(player);
    return true;
  } else if (
    board[0].innerHTML === player &&
    board[4].innerHTML === player &&
    board[8].innerHTML === player
  ) {
  popUp(player);
    return true;
  } else if (
    board[2].innerHTML === player &&
    board[4].innerHTML === player &&
    board[6].innerHTML === player
  ) {
    popUp(player);
    return true;
  } else {
    checkDraw();
    return false;
  }
}

function humanPlayerClick() {
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener("click", () => {
      if (gameBoard[i].textContent !== "") {
        alert("Space already occupied! Please play a valid move.");
        return;
      } else {
        gameBoard[i].innerHTML = humanPlayer;
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
  if (checkWhoWins(gameBoard, humanPlayer)) {
    return;
  } else {
    let spaces = unoccupiedSpaces(gameBoard);
    let static =
      spaces[Math.abs(Math.floor(Math.random() * spaces.length))];
    gameBoard[static].textContent = cpu;
    gameBoard[static].style.background = "#e30505";
    checkWhoWins(gameBoard, cpu);
    
  }
}

//reset the board after win and after draw or when the reset btn clicked
function boardReset(board) {
  for (let i = 0; i < board.length; i++) {
    board[i].textContent = "";
    board[i].style.background = "black";
  }
  declareWinner.style.display = 'none'
}
function popUp(player){
  declareWinner.style.display = "flex";
    declareWinner.style.background = "#16ab11";
    declareWinner.innerHTML = `${player} wins!!`
declareWinner.style.display = "flex";
declareWinner.style.height = "5vh"
}
