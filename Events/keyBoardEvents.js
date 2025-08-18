 /*
 *********event argument********
 let btn=document.querySelector("button");

 btn.addEventListener("click",function(event){
  console.log(event);
 });*/

let input=document.querySelector("input");
input.addEventListener("keydown",function(){
  console.log("Key is Pressed- KeyDown");
 });

input.addEventListener("keypress",function(){
  console.log("Key is Pressed- KeyPress");
 });

input.addEventListener("keyup",function(){
  console.log("Key is Pressed -KeyUp");
 });