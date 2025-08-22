let h1=document.querySelector("h1");

//h1.style.color="red";

function changeColor(color, delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       h1.style.color=color;
       resolve("color changed");
    },delay);
  });
}

// setTimeout(() => {
//   h1.style.color="red";
// },1000);

// setTimeout(() => {
//   h1.style.color="orange";
// },2000);

// setTimeout(() => {
//   h1.style.color="green ";
// },3000);




// changeColor("red",1000)
// .then((result)=>{
//   console.log(result);
//   return changeColor("orange",1000);
// })
// .then((result)=>{
//   console.log(result);
//   return changeColor("green",1000);
// })
// .then((result)=>{
//   console.log(result);
// })
// .catch(()=>{
//   console.log("Failed");
// });

async function demo() {
  try{
    await changeColor("red",1000);
    await changeColor("orange",1000);
      await changeColor("green",1000);
        await changeColor("pink",1000);
  }catch(err){
    console.log(err);
  }
  
let a=5;
console.log(a);
console.log("new number :",a+3);
}

demo();