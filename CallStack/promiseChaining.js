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
//savetoDB("Prerna");



/***** With the help of then() and catch() *****/

// savetoDB("Prerna")
// .then(()=>{
//     console.log("Promise1 data saved");
//     savetoDB("Mane")
//     .then(()=>{
//        console.log("Promise2 data saved");
//        savetoDB("Hello").
//        then(()=>{
//          console.log("Promise3 data saved");
//        }).catch(()=>{
//         console.log("Promise3 rejected");
//        });
//     }).catch(()=>{
//       console.log("Promise2 rejected");
//     });
//   }).catch(()=>{
//     console.log("Promise1 rejected");
//   });

savetoDB("Prerna")
.then((result)=>{
  console.log("Promise1 data saved");
   console.log(result);
    return savetoDB("Mane");
  })
  .then(()=>{
    console.log("Promise2 data saved");
     console.log(result);
    return savetoDB("Hello");
  })
  .then(()=>{
    console.log("Promise3 data saved");
     console.log(result);
  })
  .catch((error)=>{
    console.log("Promise1 rejected");
     console.log(error);
  });