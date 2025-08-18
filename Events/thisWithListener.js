let btn=document.querySelector("button");
let p=document.querySelector("p");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");

/*
This all generate Redundancy, so this is not right way to write code thats why we can remove it using "this" keyword
btn.addEventListener("click",
  function(){
  console.log(this);
   console.dir(this.innerText);
   this.style.backgroundColor="blue";
});

p.addEventListener("click",
  function(){
  console.log(this);
   console.dir(this.innerText);
   this.style.backgroundColor="blue";
});

h1.addEventListener("click",
  function(){
  console.log(this);
   console.dir(this.innerText);
   this.style.backgroundColor="blue";
});

h3.addEventListener("click",
  function(){
  console.log(this);
   console.dir(this.innerText);
   this.style.backgroundColor="blue";
});*/

//Here is correct way

function changeColor(){
  console.log(this);
  this.style.backgroundColor="blue";
}

btn.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);