//2. append(element)

let newP=document.createElement('p');
newP.innerText="Hi Prerna";

let body=document.querySelector('body');
let box=document.querySelector('.box');

box.append(newP);

let btn=document.createElement("button");
btn.innerText="Click Here"
box.append(btn);

newP.append(" new Text");
newP.append(btn);

let h4=document.querySelector('h4');
h4.append(btn);