let greet="hello"; //global scope

function changeGreet(){
  let greet="namaste"; //function scope
  console.log(greet);
  function innerGreet(){
    console.log(greet);
  }
}

console.log(greet); //hello
changeGreet(); //namaste