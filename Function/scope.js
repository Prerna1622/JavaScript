/*Scope defines the accessibility of variables,objects, and functions from different parts of the code.

-> Function
-> Block
-> Lexical

*/

let sum=54; //Global Scope ---> kahi bhi ham use kr skte hai within the program

function calSum(){
  //let sum=a+b; //Function scope ---> sirf function ke andar use kr shkte hai. Function ke bahr use nhi kr skte.
  console.log(sum);
}

calSum(1,2);
console.log(sum);