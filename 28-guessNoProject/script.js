"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent="🎉 Correct Number";
document.querySelector(".number").textContent=13;
document.querySelector(".score").textContent=10;
document.querySelector(".guess").value=15;
console.log(document.querySelector(".guess").value)
*/
// Event Listener
let secretNumber=Math.trunc(Math.random()*20)+1;
let scoreCount=20;
let highscore=0;
const displayMessage=function(message){
    document.querySelector(".message").textContent=message;
}
document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess,typeof guess);
    // when there is no input
    if(!guess){
        document.querySelector(".message").textContent="🚫 No number";
    }
    else if(guess===secretNumber){
        // document.querySelector(".message").textContent="Correct Number 🎉";
        displayMessage("Correct Number 🎉");
        document.querySelector(".score").textContent=scoreCount;

        document.querySelector(".number").textContent=secretNumber;

        document.querySelector("body").style.backgroundColor="#60b347";
        document.querySelector(".number").style.width="30rem";  // properties should be always written in " " in styling if it number then also;
        if(scoreCount>highscore){
            highscore=scoreCount;
            document.querySelector(".highscore").textContent=highscore;
        }
    }
    else if(guess!=secretNumber){
        if(scoreCount>1){ // is score!=0
            document.querySelector(".message").textContent= guess>secretNumber?"📈 Too high!":"📉 Too low!";
            displayMessage(guess>secretNumber?"📈 Too high!":"📉 Too low!")
            scoreCount--;
            document.querySelector(".score").textContent=scoreCount;
        }
        else{  // if score ==0        

            document.querySelector(".message").textContent="🫥 You lost the game";
            document.querySelector(".score").textContent=0;
        }
    }
//     else if(guess<secretNumber){
//         if(scoreCount>1){ // is score!=0
//             document.querySelector(".message").textContent="📉 Too low!";
//             scoreCount--;
//             document.querySelector(".score").textContent=scoreCount;
//         }
//         else{  // if score ==0        

//             document.querySelector(".message").textContent="🫥 You lost the game";
//             document.querySelector(".score").textContent=0;
//         }
//     }
//     else if(guess>secretNumber){
//         if(scoreCount>1){
//             document.querySelector(".message").textContent="📈 Too high!";
//             scoreCount--;
//             document.querySelector(".score").textContent=scoreCount;
//         }
//         else{
//             document.querySelector(".message").textContent="🫥 You lost the game";
//             document.querySelector(".score").textContent=0;
//         }  
//     }
});

document.querySelector(".again").addEventListener("click",function(){
    scoreCount=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector(".score").textContent=scoreCount;
    document.querySelector(".message").textContent="Start guessing...";
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value="";

    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";
});