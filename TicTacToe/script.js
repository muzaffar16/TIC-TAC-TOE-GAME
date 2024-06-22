console.log("Tic Tac Toe")

let winningPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]

let turn0 = true;  //if true then 0 player turn else X player turn

let val = document.querySelectorAll(".box")

function pauseGame() {
    val.forEach((e) => {
        e.style.pointerEvents = "none"; // Disable further clicks
        
    });
}

function showWinner(winner){
    let win=document.querySelector(".game")
   win.insertAdjacentHTML("afterend",
   `<div class = "displayWinner">
       <div class ="display"> <b> Winner : ${winner} </b>
   </div>`
   )
   pauseGame()
  
} 
 let i=0
function checkWin(){
    i++
    console.log(i)
    for(let x of winningPos){ 
        let val1 = val[x[0]].innerHTML
        let val2 = val[x[1]].innerHTML
        let val3 = val[x[2]].innerHTML
        if(val1 === val2 && val2 === val3 && val1 != ""){
            // console.log("Player :", val1, "Winner" )
            showWinner(val1)
            
      }
    

    }
    if(i==9){
        let win=document.querySelector(".game")
        win.insertAdjacentHTML("afterend",
        `<div class = "displayWinner">
            <div class ="display"> <b> MATCH DRAW </b>
        </div>`
        )
        
    
  }
}

function updateTurnDisplay() {
    let playerTurnDisplay = document.querySelector(".playerTurn");
    let BD = document.body;
    if (turn0) {
        // BD.style.backgroundColor = "red";
        playerTurnDisplay.innerHTML = "<b>Player: 0 Turn</b>";
    } else {
        // BD.style.backgroundColor = "blue";
        playerTurnDisplay.innerHTML = "<b>Player: X Turn</b>";
    }
    
}

val.forEach((e) => {
    e.addEventListener("click", () => {
        if (turn0) {
            e.innerHTML = "0"
            turn0 = false
            
        } else {
            e.innerHTML = "X"
            turn0 = true
        }
        checkWin()
        updateTurnDisplay()
        e.disabled = true
    })
    
})

function resetGame() {
    val.forEach((e) => {
        e.innerHTML = ""
        e.disabled = false
    })
    turn0 = true
        // Remove the winner display if it exists
        let winnerDisplay = document.querySelector(".displayWinner");
        if (winnerDisplay) {
            winnerDisplay.remove();
        }
      i=0
      val.forEach((e) => {
        e.style.pointerEvents = "auto"; //enable further clicks
        
    });
        updateTurnDisplay();
}


let reset = document.querySelectorAll(".reset")
reset.forEach((e) => {
    e.addEventListener("click", () => {
        resetGame()
    })
   
})
