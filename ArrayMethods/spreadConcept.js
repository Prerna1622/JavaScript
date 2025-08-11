let arr=[1,4,2,4,7,5];

let ans=Math.min(...arr);
console.log(ans);

console.log(Math.min(...arr));
console.log(...arr);

console.log(..."prernamane");

//Spread with Array Literal
//1.******************************
let newArr=[...arr];
newArr.push(6);
console.log(...newArr);
//2.*********************************
let odd=[1,3,5,7];
let even=[2,4,6,8];

let newA=[...odd,...even];
console.log(newA);

//Spread with Object Literal
//1.************************
const employee={
  email:"xyz@gmail.com",
  password:"abcd",
};

const newEmployee={
  ...employee, id:123,
};

console.log(employee);
console.log(newEmployee);
//2.****************************

let arr1=[1,2,3,4,5];

let obj1={...arr1};
let obj2={..."Hello"};
console.log(obj1);
console.log(obj2);