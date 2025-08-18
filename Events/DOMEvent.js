let btn=document.querySelector("button");
console.log(btn.onclick);
btn.onclick=function(){
  console.log("Button was Clicked!");
};
console.log(btn.onclick);