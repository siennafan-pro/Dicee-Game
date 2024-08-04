var randomNumber1 = Math.floor(Math.random()*6 +1);
document.querySelectorAll("div div img")[0].setAttribute("src","./images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random()*6 +1);
document.querySelectorAll("div div img")[1].setAttribute("src","./images/dice"+randomNumber2+".png");

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
 } else if (randomNumber1 > randomNumber2) {
     document.querySelector("h1").innerHTML = "<img src='./images/flag.png' class='flag'></img>Player 1 Wins!";
     document.querySelector(".flag").style.width="80px";
 } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! <img src='./images/flag.png' class='flag'></img>";
    document.querySelector(".flag").style.width="80px";
 }

 
