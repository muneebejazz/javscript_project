const boxes = Array.from(document.getElementsByClassName("box"));
const restartButton = document.querySelector(".restart-game");
const TEXT_0 = "0";
const TEXT_X = "X";
const spaces = [null, null, null, null, null, null, null, null, null];

let currentPlayer = TEXT_0;

const resetGame = () => {
  spaces.forEach((space, index) => (spaces[index] = null));
  boxes.forEach((box) => (box.innerText = ""));
  currentPlayer = TEXT_0;
};

const hasPlayerWon = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      return true;
    }
  }

  if (spaces[1] === currentPlayer) {
    if (spaces[4] === currentPlayer && spaces[7] === currentPlayer) {
      return true;
    }
  }

  if (spaces[2] === currentPlayer) {
    if (spaces[5] === currentPlayer && spaces[8] === currentPlayer) {
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[6] === currentPlayer) {
      return true;
    }
  }

  if (spaces[3] === currentPlayer) {
    if (spaces[4] === currentPlayer && spaces[5] === currentPlayer) {
      return true;
    }
  }
  if (spaces[6] === currentPlayer) {
    if (spaces[7] === currentPlayer && spaces[8] === currentPlayer) {
      return true;
    }
  }
};

const drawBoard = () => {
  //if the boxes are at the top
  boxes.forEach((box, index) => {
    let styleString = "";
    if (index < 3) {
      styleString += "border-bottom:3px solid black;";
    }
    if (index > 5) {
      styleString += "border-top:3px solid black;";
    }
    if (index % 3 === 0) {
      styleString += "border-right:3px solid black;";
    }
    if (index % 3 === 2) {
      styleString += "border-left:3px solid black;";
    }
    console.log(index);

    box.style = styleString;
    box.addEventListener("click", boxClicked);
  });
};

const boxClicked = async (e) => {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;

    e.target.innerText = currentPlayer;

    console.log("before alert");
    if (hasPlayerWon()) {
      setTimeout(() => {
        alert(`${currentPlayer} has won.`);
      }, 10);
      setTimeout(() => {
        resetGame();
      }, 20);
      return;
    }
    currentPlayer = currentPlayer === TEXT_0 ? TEXT_X : TEXT_0;
  }
};

drawBoard();

restartButton.addEventListener("click", () => {
  resetGame();
});
