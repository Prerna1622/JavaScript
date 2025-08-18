let btn=document.querySelector("button");

function randomColor(){
  let r=Math.floor(Math.random()*256);
  let g=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`;
}

//console.log(randomColor());

btn.addEventListener("click",changeColor);
btn.addEventListener("click",changeText);


function changeColor(){
let div=document.querySelector(".d");
div.style.backgroundColor=randomColor();
}

function changeText(){
let h1=document.querySelector("h1");
h1.innerText=randomColor();
}


//console.log(btn);
//console.log(div);
//console.log(h1);
