let btn=document.querySelector("button");
let input=document.querySelector("input");
let p=document.querySelector("#myPara");

btn.addEventListener("mouseout",function(event){
  console.log("Event MouseOut");
});
input.addEventListener("keypress",function(event){
  console.log("Event Key Press");
});
p.addEventListener("scroll",function(event){
  console.log("Event Scroll");
});

window.addEventListener("load",function(event){
  console.log("Event Load");
});