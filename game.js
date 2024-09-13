let cells = document.querySelectorAll(".cell");
let turnindicator = document.querySelector(".container .turn-indicator");
let preContainer = document.querySelector(".container .pre-container");
let resultBox = document.querySelector(".container .result-box");
let winnerMsg = document.querySelector(".container .result-box .winner-msg");
let changeturn = false;

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (changeturn == false) {
      // console.log("X turn");
      changeturn = true;
      cell.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
      cell.style.pointerEvents = "none";
      cell.id = "X";
      turnindicator.style.marginLeft = "150px";
    } else {
      // console.log("O turn");
      cell.innerHTML = `<i class="fa-solid fa-o"></i>`;
      cell.style.pointerEvents = "none";
      changeturn = false;
      cell.id = "O";
      turnindicator.style.marginLeft = "0px";
    }
    winning();
    Draw();
  });
});

let wincombo = [
  [0, 3, 6],
  [6, 7, 8],
  [3, 4, 5],
  [0, 1, 2],
  [2, 5, 8],
  [1, 4, 7],
  [2, 4, 6],
  [0, 4, 8],
];

let winning = () => {
  for (let a = 0; a <= 7; a++) {
    let b = wincombo[a];
    if (cells[b[0]].id == "" || cells[b[1]].id == "" || cells[b[2]].id == "") {
      continue;
    } else if (
      cells[b[0]].id == "X" &&
      cells[b[1]].id == "X" &&
      cells[b[2]].id == "X"
    ) {
      resultBox.style.display = "block";
      preContainer.style.display = "none";
      winnerMsg.innerHTML = "Player X won the game!";
      // alert("X won the game!");
    } else if (
      cells[b[0]].id == "O" &&
      cells[b[1]].id == "O" &&
      cells[b[2]].id == "O"
    ) {
      resultBox.style.display = "block";
      preContainer.style.display = "none";
      winnerMsg.innerHTML = "Player O won the game!";
      // alert("O won the game!");
    } else {
      continue;
    }
  }
};

let Draw = () => {
  if (
    cells[0].id != "" &&
    cells[1].id != "" &&
    cells[2].id != "" &&
    cells[3].id != "" &&
    cells[4].id != "" &&
    cells[5].id != "" &&
    cells[6].id != "" &&
    cells[7].id != "" &&
    cells[8].id != ""
  ) {
    // alert("Match Draw!");
    resultBox.style.display = "block";
    preContainer.style.display = "none";
    winnerMsg.innerHTML = "The match has been drawn!";
  }
};
