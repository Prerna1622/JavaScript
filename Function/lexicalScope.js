/* A variable defined outside a function can be accessible inside another function defined after the variable declaration*/

function outerFunc()
{
  let x=5;
  let y=6;
  function innerFunc() //scope- function scope-> Is inner function ko ham sirf outerfunction me access kr skte hai, uske bahr ye access nhi hoga.
  {
    let a=10;
    console.log(x);
  }
  console.log(a);  //not accessible  
  innerFunc();
}

//hoisting --> 