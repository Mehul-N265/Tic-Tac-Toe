let gameBoard = document.querySelectorAll(".cell");
const resetBtn = document.querySelector("#reset");

}

function humanPlayerClick() {
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener("click", () => {
      if (gameBoard[i].textContent !== "") {
        alert("Space already occupied! Please play a valid move.");
        return;
      } else {
        gameBoard[i].innerHTML = "X";

      }
    });
  }
}

  }
}
