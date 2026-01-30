'use strict';
let gameField = document.querySelector('#game');
let count = 0;
let score = 0;
let timeLeft=9;
let countr = document.querySelector("#countr")
let Btn = document.querySelector("#startBtn")
let startBtn = document.querySelector("#Time");
startBtn.addEventListener("click", function () {
  let sec = setInterval(function() {
    let scoreText = document.querySelector('#score');
    if (timeLeft < 10) {
      scoreText.innerText = `00:0${timeLeft}`;
}else{
  scoreText.innerText = `00:${timeLeft}`;
}

if(timeLeft<=0){
  clearInterval(sec);
}
timeLeft -=1;
  }, 1000);
} )
Btn.addEventListener("click", function (){
count+=1;
countr.innerText = count;
})
    let time = 0;
 function countTime(){
    
    time ++;
    console.log(time);
 let elem = document.createElement('div');
 

elem.data = 0;
let IntervalID = setInterval(function(){
    if (elem.data >= 400){
    elem.remove()}
elem.data += 2;
elem.style.top = elem.data + "px";
}, 20)

 }
 let  intervalID = setInterval(countTime, 1000);
 document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle'); 
  const body = document.body; 

 
  function toggleTheme() {
    body.classList.toggle('light-theme'); 
  }

 
  if (themeToggle) {  
    themeToggle.addEventListener('click', toggleTheme);
  } 
});
