"use strict";
const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1')
const score0EL=document.querySelector("#score--0");
const score1EL=document.getElementById("score--1");
const current0El=document.getElementById("current--0");
const current1El=document.getElementById("current--1");
const diceEl=document.querySelector(".dice");
const btnNew=document.querySelector(".btn--new");
const btnroll=document.querySelector(".btn--roll");
const btnhold=document.querySelector(".btn--hold");
// starting condition
// score0EL.textContent=0;  // settiing score of player zero =0;
// score1EL.textContent=0;  // setting score of player one=0;
// diceEl.classList.add("hidden");  // adding hidden class to dice so that we can hide dice
// const scores=[0,0];
// let currentScore=0;
// let activePlayer=0;
// let playing=true;
let scores,currentScore,activePlayer,playing;
const init = function() {
    scores=[0,0];
    currentScore=0;
    activePlayer=0;
    playing=true;

    score0EL.textContent=0; 
    score1EL.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;

    diceEl.classList.add("hidden");
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();
const switchPLayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer=activePlayer===0?1:0;
    currentScore=0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
// adding event listener to roll the dice
btnroll.addEventListener("click",function(){
    if(playing){
    // generating random number
    const dice=Math.trunc(Math.random()*6)+1;
    // displaying dice
    diceEl.classList.remove("hidden");
    diceEl.src=`dice-${dice}.png`;  // setting different images
    // checking for rolled 1:
    if(dice!==1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        // current0El.textContent=currentScore;
    }
    else{
        //switching player
        switchPLayer();
    }
}
})
btnhold.addEventListener('click',function(){
    if(playing){
    // adding current score to active player score
    scores[activePlayer]=scores[activePlayer]+currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

    if(scores[activePlayer]>=20){
        playing=false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else{
        switchPLayer();
    }
}
})
// btnNew.addEventListener('click',function(){
//     diceEl.classList.add('hidden');

//     currentScore=0;
//     document.getElementById(`current--${activePlayer}`).textContent=0;
//     // scores[0]=0;
//     // scores[1]=0;
//     document.getElementById('score--0').textContent=0;
//     document.getElementById('score--1').textContent=0;
// })
btnNew.addEventListener('click',init);