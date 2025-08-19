let input=document.querySelector("input");
let h1=document.querySelector("h1");

input.addEventListener("input",function(event){
  h1.innerText=input.value;
});