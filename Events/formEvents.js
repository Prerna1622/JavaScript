/*let form=document.querySelector("form");

form.addEventListener("submit",function(event){
  event.preventDefault(); //avoid default action generate due to Event
  alert("Form is submitted");
  console.log(event);
});*/


//Extracting Form Data
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
  event.preventDefault(); 

  /*let input=document.querySelector("input");
  console.log(input);
  console.dir(input);
  console.log(input.value);
  console.log(input.innerText);*/

  let input1=document.querySelector("#user");
  console.log(input1.value);

  let input2=document.querySelector("#pass");
  console.log(input2.value);

  alert(`Hi ${input1.value}, your password is set to ${input2.value}`);

});