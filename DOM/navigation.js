let h4=document.querySelector('h4');
console.log(h4.parentElement);
console.log(h4.children);


let box=document.querySelector(".box");
console.log(box.children);
console.log(box.childElementCount);
console.log(box.parentElement);


let ul=document.querySelector('ul');
console.log(ul.children);
console.log(ul.parentElement);
console.log(ul.childElementCount);

//For Sibling
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);

console.log(ul.children[0].nextElementSibling);

console.log(ul.children[1].previousElementSibling);
