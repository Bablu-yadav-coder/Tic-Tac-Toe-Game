const boxs = document.querySelectorAll(".btn");
let winner  = document.querySelector("#winner");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new-game");
let winBox = document.querySelector(".win-box");


newGameBtn.disabled = true;
let turnX = true;
let count = 0;

let winnigTurn = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

boxs.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        if(turnX) {
            btn.innerHTML = "X"
            btn.style.color = "blue"
            turnX = false;
        }else {
            btn.innerHTML = "O"
             btn.style.color = "gold"
            turnX = true;
        }
        count++;
        
        let win = checkWinning();
        if(count === 9 && !win) {
            winner.innerHTML = `Game was draw!`;
            winBox.classList.toggle("winner-box");
            newGameBtn.disabled = false;
        }
        btn.disabled = true;

        console.log(count);
    });

})

function checkWinning() {
    for(pattern of winnigTurn) {
        let pos1 = (boxs[pattern[0]].innerText);
        let pos2 = (boxs[pattern[1]].innerText);
        let pos3 = (boxs[pattern[2]].innerText);

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 == pos2 && pos2 == pos3) {
                showWinner(pos1);
                return true
            }
        }
    }
}


resetBtn.addEventListener("click", reset);
newGameBtn.addEventListener("click", resetGame);

console.log(winner);

let showWinner = (win) => {
    console.log('Conragtulations', win)
    winner.innerHTML = `Conragtulations, ${win} won the game!`;
    gameDisabled();
    winBox.classList.toggle("winner-box");
    newGameBtn.disabled = false;
}

function gameDisabled() {
    boxs.forEach( (btn) => {
       return  btn.disabled = true;
    });
}


function reset() {
    boxs.forEach( (btn) => {
       btn.innerHTML = "";
       btn.disabled = false;
       winner.innerHTML = "";
    });
    count = 0;
}
function resetGame() {
    boxs.forEach( (btn) => {
       btn.innerHTML = "";
       btn.disabled = false;
       winner.innerHTML = "";
       winBox.classList.toggle("winner-box");
    });
    count = 0;
}

