var cells = document.querySelectorAll(".cell");
var flag = 1;
var turn = document.querySelector("h2 span");
var score1 = document.querySelector("h3 span");
var score2 = document.querySelector("h4 span");
var player1 = 0,
  player2 = 0;

cells.forEach(function (cell) {
  cell.addEventListener("click", cellClick);
});

window.onload = function () {
  turn.innerHTML = "X";
  score1.innerHTML = player1;
  score2.innerHTML = player2;
};

function cellClick() {
  if (flag === 1) {
    this.innerHTML = "X";
    flag = 0;
    turn.innerHTML = "O";
  } else {
    this.innerHTML = "O";
    flag = 1;
    turn.innerHTML = "X";
  }
  this.removeEventListener("click", cellClick);
  win();
  draw();
}

function win() {
  var cv1 = document.getElementById("cell1").innerHTML;
  var cv2 = document.getElementById("cell2").innerHTML;
  var cv3 = document.getElementById("cell3").innerHTML;
  var cv4 = document.getElementById("cell4").innerHTML;
  var cv5 = document.getElementById("cell5").innerHTML;
  var cv6 = document.getElementById("cell6").innerHTML;
  var cv7 = document.getElementById("cell7").innerHTML;
  var cv8 = document.getElementById("cell8").innerHTML;
  var cv9 = document.getElementById("cell9").innerHTML;
  if (
    (cv1 == "X" && cv2 == "X" && cv3 == "X") ||
    (cv4 == "X" && cv5 == "X" && cv6 == "X") ||
    (cv7 == "X" && cv8 == "X" && cv9 == "X") ||
    (cv1 == "X" && cv4 == "X" && cv7 == "X") ||
    (cv2 == "X" && cv5 == "X" && cv8 == "X") ||
    (cv3 == "X" && cv6 == "X" && cv9 == "X") ||
    (cv1 == "X" && cv5 == "X" && cv9 == "X") ||
    (cv3 == "X" && cv5 == "X" && cv7 == "X")
  ) {
    alert("Player X won");
    player1++;
    score1.innerHTML = player1;
    resetX();
  }
  if (
    (cv1 == "O" && cv2 == "O" && cv3 == "O") ||
    (cv4 == "O" && cv5 == "O" && cv6 == "O") ||
    (cv7 == "O" && cv8 == "O" && cv9 == "O") ||
    (cv1 == "O" && cv4 == "O" && cv7 == "O") ||
    (cv2 == "O" && cv5 == "O" && cv8 == "O") ||
    (cv3 == "O" && cv6 == "O" && cv9 == "O") ||
    (cv1 == "O" && cv5 == "O" && cv9 == "O") ||
    (cv3 == "O" && cv5 == "O" && cv7 == "O")
  ) {
    alert("Player O won");
    player2++;
    score2.innerHTML = player2;
    resetO();
  }
}

function draw() {
  var allCellsFilled = true;
  cells.forEach(function (cell) {
    if (cell.innerHTML === "") {
      allCellsFilled = false;
    }
  });
  if (allCellsFilled) {
    alert("It's a draw!");
    reset();
  }
}

function reset() {
  cells.forEach(function (cell) {
    cell.innerHTML = "";
    cell.addEventListener("click", cellClick);
  });
  if (flag === 1) {
    turn.innerHTML = "X";
    flag = 1;
  } else {
    turn.innerHTML = "O";
    flag = 0;
  }
}

function resetX() {
  cells.forEach(function (cell) {
    cell.innerHTML = "";
    cell.addEventListener("click", cellClick);
  });
  flag = 1;
  turn.innerHTML = "X";
}

function resetO() {
  cells.forEach(function (cell) {
    cell.innerHTML = "";
    cell.addEventListener("click", cellClick);
  });
  flag = 0;
  turn.innerHTML = "O";
}
