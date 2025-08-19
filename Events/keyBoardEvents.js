 /*
 *********event argument********
 let btn=document.querySelector("button");

 btn.addEventListener("click",function(event){
  console.log(event);
 });*/

let input=document.querySelector("input");
input.addEventListener("keydown",function(event){
  console.log("Key is Pressed - KeyDown");
  console.log(event);
  console.log("Event Key is : ",event.key);
  console.log("Event Key's code is : ",event.code);
 });

/*input.addEventListener("keypress",function(){
  console.log("Key is Pressed - KeyPress");
 });

input.addEventListener("keyup",function(){
  console.log("Key is Pressed - KeyUp");
 });*/