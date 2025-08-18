let h1=document.querySelector("h1");
h1.addEventListener("click",function(){
  console.log("Clicked");
});

let box=document.querySelector(".box");
box.addEventListener("mouseenter",function(){
  alert("On Div");
});