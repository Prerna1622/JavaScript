let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",function(event){
  event.stopPropagation();
  console.log("Div was Clicked");
});

ul.addEventListener("click",function(event){
  event.stopPropagation();
  console.log("Ul was Clicked");
});

for(li of lis){
  li.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("Li was Clicked");
  });
}

