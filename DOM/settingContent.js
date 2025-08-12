let para=document.querySelector('p');
console.log(para);
console.dir(para);

console.log(para.innerText);
console.log(para.innerHTML);
console.log(para.textContent);
para.innerText="Hi I am <b>Peter Parker!</b>";
para.innerHTML="Hi I am <b>Peter Parker!</b>";


let heading=document.querySelector('h1');
console.log(heading);
heading.innerHTML=`<u>${heading.innerText}</u>`;

