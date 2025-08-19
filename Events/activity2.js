let input=document.querySelector("#text");
let p=document.querySelector("p");
input.addEventListener("input",function(event){
p.innerText=input.value;
});