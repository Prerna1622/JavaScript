let input=document.querySelector("input");

input.addEventListener("keydown",function(event){
  console.log("code= ",event.code); //ArrowUp, ArrowDown, ArrowLeft, ArrowDown

  if(event.code=="KeyU")
  {
    console.log("Character moves Up");
  }else if(event.code=="KeyD"){
    console.log("Character moves Down");
  }else if(event.code=="KeyL"){
    console.log("Character moves Left");
  }else if(event.code=="KeyR"){
    console.log("Character moves Right");
  }
});