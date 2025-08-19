let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");



btn.addEventListener("click", function (event) {

  let item=document.createElement("li");
  item.innerText=input.value;
  ul.appendChild(item);


  let delBtn=document.createElement("button");
  delBtn.innerText="delete";
  delBtn.classList.add("del");
  item.appendChild(delBtn);

  input.value="";
});


//Parent---Ul
//Child---Li(Parent of Button)
//Child--Button



ul.addEventListener("click",function(event){
  console.log(event.target.nodeName);
  // console.log("Button clicked");
  if(event.target.nodeName=="BUTTON"){
    let parent=event.target.parentElement;
    parent.remove();
  }
});



//for event delegation we use event bubling and thats why we are going to apply it on Parent of element so that it will automatically trigerred child via parent.
// let delBtns=document.querySelectorAll(".del");

// for(delBtn of delBtns){
//  delBtn.addEventListener("click",function(event){
//     console.log(" Delete clicked");
//     let parent=this.parentElement;
//     console.log(parent);
//     parent.remove();
   
//   });
// }




