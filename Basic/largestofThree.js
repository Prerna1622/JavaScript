let num1=2;
let num2=3;
let num3=11;

let largest;

if(num1>=num2 && num1>=num3)
{
  largest=num1;
}else if(num2>=num1 && num2>=num3)
{
  largest=num2;
}else{
  largest=num3;
}
console.log(`Largest number is ${largest}`);