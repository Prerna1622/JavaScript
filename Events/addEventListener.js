let btns=document.querySelectorAll("button");

for(btn of btns){
  //btn.addEventListener("click",sayHello);
 //btn.addEventListener("click",sayName);
  btn.addEventListener("dblclick",function(){
    console.log("You Doubled Click");
  });
}

function sayHello(){
  alert("Hello");
}
function sayName(){
  alert("Prerna");
}