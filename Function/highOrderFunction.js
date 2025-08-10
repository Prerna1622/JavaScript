/*Higher Order Functions : are the functions that 
1)Take one or multiple functions as arguments
2)and returns a function 


*/
function multipleGreet(func,n)
{
   for(let i=1;i<=n;i++){
  func();
}
}

let greet = function()
{
  console.log("hello");
}
/*function greet(){
  console.log("hello");
}*/

multipleGreet(greet,10);
multipleGreet(function(){
  console.log("namaste");
},10);
//greet() nhi pass krna hai because agar hum waise likhte hai to hum us function ko execute krte hain na ki pass