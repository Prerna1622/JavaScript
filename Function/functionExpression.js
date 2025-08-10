/* Function Expressions are nameless functions whose value is stored in variable*/

const sum = function(a,b){
return a+b;
}

console.log(sum(1,2));

let hello = function(){
console.log("Hello");
}
//console.log(hello());



hello = function(){
console.log("Namaste");
}
console.log(hello());

// If we want all work same for function like variable then we can use function expression.