async function greet(){ 
  //throw "some random errors";
  return "hello";
}

greet()
.then((result)=>{
  console.log("Promise resolved");
  console.log("result was : ",result);
})
.catch((err)=>{
  console.log("promise was rejected with err : ",err);
});

let demo=async()=>{
  return 5;
}

console.log(demo());