var boxIndexValues = new Array(9).fill("");
var nextMove = "X";
var gameover = false;
var Messagelement = null;

var solutions = [
    //Horizontal
    [0,1,2],
    [3,4,5],
    [6,7,8],
    
    //Vertical
    [0,3,6],
    [1,4,7],
    [2,5,8],
    
    //Diagonal
    [0,4,8],
    [2,4,6],
]


document.addEventListener("DOMContentLoaded", () => {
    Messagelement = document.getElementById("result");
    Messagelement.innerHTML += `Welcome to Tic-tac-toe!!! <br/>`;
    player = "p1";




    const restartButton = document.getElementById("restart");
    restartButton.addEventListener("click", ()=> {

    boxIndexValues = new Array(9).fill("");

    nextMove = "X";
    gameover = false;
    
    var table = document.getElementById('boardGame');
        if (table == null) return;
            var divs = table.getElementsByTagName('div');
            for (var i = 0; i < divs.length; i++) {
                var div = divs[i];
                div.innerHTML = "";   
            }
            Messagelement.innerHTML = `Welcome to Tic-tac-toe!!! <br/>`;
    });
});

  
function moves(indexMove, e){
    
    if(!gameover && boxIndexValues[indexMove] !="")
        return;

    boxIndexValues[indexMove] = nextMove;
    drawIcon(e.target);
    checkWinner();
    switchMove();

    if(boxIndexValues.includes("") && !gameover)
        Messagelement.innerHTML += `Next Move : ${nextMove}<br/>`;
}


function drawIcon(div){
    div.innerHTML = nextMove;
}


function switchMove(){
    nextMove = nextMove == "X"? "0" : "X"
}


function checkWinner(){
    
    for (let index = 0; index <= 7; index++) {
        const solution = solutions[index];
        
        if(
            boxIndexValues[solution[0]] == "" ||
            boxIndexValues[solution[1]] == "" ||
            boxIndexValues[solution[2]] == ""
            )
        {
            gameover = false;
            continue;
        }

        if(
            boxIndexValues[solution[0]] == boxIndexValues[solution[1]] &&
            boxIndexValues[solution[1]] == boxIndexValues[solution[2]]
            )
        {
            gameover = true;
            Messagelement.innerHTML = `Winner is!!! ${nextMove}`;
            break;
        }


        if(!boxIndexValues.includes("") && !gameover){
            gameover = true;
            Messagelement.innerHTML = "It's a tie!!!";
        }
    }
}
