//How to add HTML Elements using Javascript inside document

//1. appendChild(Element)


let newP=document.createElement('p');
newP.innerText="Hi Prerna";
let body=document.querySelector('body');
body.appendChild(newP);

let box=document.querySelector('.box');
box.append(newP);


let btn=document.createElement("button");
btn.innerText="Click Here"
box.append(btn);

