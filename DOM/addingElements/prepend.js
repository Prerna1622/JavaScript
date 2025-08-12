//3 Prepend

let newP=document.createElement('p');
newP.innerText="Hi Prerna";

let body=document.querySelector('body');
let box=document.querySelector('.box');

body.prepend(newP);
let btn=document.createElement("button");
btn.innerText="Click Here";

box.prepend(btn);