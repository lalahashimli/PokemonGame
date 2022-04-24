var gameArray = ["w","f","e"] ;
    
var player1_score = 0 ;
var player2_score = 0 ;

var win1Text = document.getElementById("winGame1") ;
var win2Text = document.getElementById("winGame2") ;
var score1Text = document.getElementById("player1Score") ;
var score2Text = document.getElementById("player2Score") ;
var image1 = document.getElementById("player1Img") ;
var image2 = document.getElementById("player2Img") ;



function startGame(e) {

    var userAttack = e.key.toLowerCase() ;
    if(gameArray.indexOf(userAttack) === -1) {
        return ;
    }
    
    function compAttack(arr) {

    var randomNum = Math.floor(Math.random()*arr.length) ;
    return arr[randomNum] ;
    }
    var comp = compAttack(gameArray) ;

    image1.src = `./img/${userAttack}.png` ;
    image2.src = `./img/${comp}.png` ;

    if((userAttack === "w" && comp === "f") || (userAttack === "e" && comp === "w") || (userAttack === "f" && comp === "e")) {
        player1_score += 1;
        score1Text.innerHTML = player1_score ;
        win1Text.innerHTML = "Winner" ;
        win2Text.innerHTML = "Loser"
    
    } else if(userAttack === comp) {
        win1Text.innerHTML = "Draw" ;
        win2Text.innerHTML = "Draw" ;
       
    } else {
        player2_score += 1;
        score2Text.innerHTML = player2_score ;
        win1Text.innerHTML = "Loser" ;
        win2Text.innerHTML = "Winner" ;
    }

}

window.onkeydown = startGame ;



