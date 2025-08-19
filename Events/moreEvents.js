let user=document.querySelector("#user");
user.addEventListener("change",function(event){
  event.preventDefault(); 
  console.log("Change event");
  console.log("final value=",this.value);
});

user.addEventListener("input",function(event){
  event.preventDefault(); 
  console.log("Input event");
  console.log("final value=",this.value);
});