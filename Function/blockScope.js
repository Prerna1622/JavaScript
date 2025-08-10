//Variable declared inside a {} block can not be accessed from outside the block.
let num=20;
{
  let n=30;
  console.log(n);
  console.log(num);
}

console.log(num);
console.log(n); //--> It is not accessible outside the block.
