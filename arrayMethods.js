/*

//push
//pop
//unshift
//shift
let fruits=["mango","papaya","apple","litchi"];

fruits.push("banana");
fruits.unshift("pineapple");
//fruits.pop(fruits[0]);
let blocked=fruits.pop();
fruits.shift();
console.log(fruits);

let followers=["a","b","c"];
let blockedUsers=followers.shift();
console.log(followers);
console.log(blockedUsers);


//indexOf and includes
let primary=["red","yellow","blue"];
console.log(primary.indexOf("red"));
console.log(primary.indexOf("green"));
console.log(primary.indexOf("blue"));

console.log(primary.includes("green"));
console.log(primary.includes("red"));


//concatination and reverse
let primary1=["red","yellow","blue"];
let secondary1=["orange","green","violet"];
//let concateF=primary1.concat(secondary1);
//console.log(concateF);
console.log(primary1.concat(secondary1));
//console.log(secondary1.concat(primary1));

console.log(primary1.reverse());
console.log(secondary1.reverse());

//slice method
let colors=["red","yellow","blue","orange","pink","white"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-2));
console.log(colors.slice(8));


//splice method
console.log(colors.splice(4)); //["pink","white"]; ["red","yellow","blue","orange"]
console.log(colors.slice(0,1));//["red"] ["yellow","blue","orange"]
console.log(colors.slice(0,1,"black","grey"));// ["yellow"] ["black","grey","yellow","blue","orange"]

console.log(colors);


//sort method

let days=["m","t","s","f","w"];
console.log(days.sort());
let numbers=[99,89,67,42,100];
console.log(numbers.sort());

*/

//Practice Quetsions
//Q1.using splice make it ["january","july","march","august"]
let start=["january","july","march","august"];
console.log(start.splice(0,1));
console.log(start.splice(0,1,"july","june"));
console.log(start);

//Q2
let lang=["c","c++","html","js","python","java","c#","sql"];
console.log(lang.reverse().indexOf("js"));
