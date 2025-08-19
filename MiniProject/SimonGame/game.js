//1. Key Press---> Game start
//2. random button flash ---> Level1
//3. btn press--->check---> user==seq {EventLitener}
//same--> level up    not same--->gameOver

let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let btns=["yellow","red","purple","green"];


let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
  if(started==false){
    console.log("Game is started");
    started=true;
    levelUp();
  }
});


function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
  btn.classList.remove("flash");
},500);
}


function userFlash(btn){
btn.classList.add("userFlash");
setTimeout(function(){
  btn.classList.remove("userFlash");
},500);
}

function levelUp(){
  userSeq=[];
level++;
h2.innerText=`Level ${level}`;
//random button choose

let randIdx=Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randbtn=document.querySelector(`.${randColor}`);
// console.log(randIdx);
// console.log(randColor);
// console.log(randbtn);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randbtn);
}


function checkAns(idx){
// console.log("current level :",level);
// let idx=level-1;
if(userSeq[idx]===gameSeq[idx]){
  // console.log("same");
  if(userSeq.length==gameSeq.length){
    levelUp();
  }
}else{
  h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
  document.querySelector("body").style.backgroundColor="red";
  setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
  },150);

  reset();
}
}

function btnPress(){
  //console.log("btn was pressed");
  //console.log(this);
  let btn=this;
  userFlash(btn);
  userColor=btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn1");
for(btn of allBtns){
  btn.addEventListener("click",btnPress);
}

function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}
 