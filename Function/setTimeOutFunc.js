console.log("Hi there: Before Timeout");

setTimeout(()=>{
  console.log("In SET_TIMEOUT function after 4000ms");
},4000);

console.log("Hi there: After Timeout");