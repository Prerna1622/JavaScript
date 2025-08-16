let para=document.createElement("p");
para.innerText="Hey I'm Red";

document.querySelector('body').append(para);
para.classList.add('red');
//let h1=document.querySelector("h1");
//h2.insertAdjacentElement("beforebegin",h2);

let h3=document.createElement("h3");
h3.innerText="Hey, I am Blue";

document.querySelector("body").append(h3);

h3.classList.add("blue");


let div=document.createElement("div");
let h1=document.createElement("h1");
let p=document.createElement("p");
h1.innerText="I am in a div";
p.innerText="ME TOO!";

div.classList.add('bor');
div.classList.add('back');

div.appendChild(h1);
div.appendChild(p);

document.querySelector("body").append(div);
