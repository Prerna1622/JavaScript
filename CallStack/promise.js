// function savetoDB(data,success,failure)
// {
//   let internetSpeed=Math.floor(Math.random()*10)+1;
//   if(internetSpeed>4)
//   {
//     success();
//   }
//   else
//   {
//     failure();
//   }
// };

// savetoDB(
//   "Prerna",
//   ()=>{
//   console.log("Success1");
//   savetoDB(
//     "Hello",
//     ()=>{
//     console.log("Success2");
//     savetoDB(
//       "Mane",
//       ()=>{
//       console.log("Success3");
//     },
//     ()=>{
//       console.log("Failure3");
//     });
//   },
//   ()=>{
//     console.log("Failure2");
//   });
// },
// ()=>{
//   console.log("Failure 1");
// });



/******Above Logic with the help of Promise******/

 function savetoDB(data){
return new Promise((resolve,reject)=>{
  let internetSpeed=Math.floor(Math.random()*10)+1;
  if(internetSpeed>4){
    resolve("Data was saved");
  }else{
     reject("Weak Connection");
  }
});
}
savetoDB("Prerna");



/***** With the help of then() and catch() *****/

savetoDB("Prerna")
.then(()=>{
    console.log("Promise resolved");
  }).catch(()=>{
    console.log("Promise rejected");
  });

