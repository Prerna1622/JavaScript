let btn=document.createElement("button");
btn.innerText="Click Here";

//paragraph ke hisab se button ko add krenge
let p=document.querySelector('p');

p.insertAdjacentElement('beforebegin',btn);

p.insertAdjacentElement('afterbegin',btn);

p.insertAdjacentElement('beforeend',btn);

p.insertAdjacentElement('afterend',btn);

