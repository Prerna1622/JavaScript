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

savetoDB("Prerna")
.then(()=>{
    console.log("Promise1 resolved");
    savetoDB("Mane")
    .then(()=>{
       console.log("Promise2 resolved");
       savetoDB("Hello").
       then(()=>{
         console.log("Promise3 resolved");
       }).catch(()=>{
        console.log("Promise3 rejected");
       });
    }).catch(()=>{
      console.log("Promise2 rejected");
    });
  }).catch(()=>{
    console.log("Promise1 rejected");
  });

