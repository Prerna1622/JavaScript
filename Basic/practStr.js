// Q1
let msg="help!   ";
console.log(msg.trim().toUpperCase());

//Q2
let name1="ApnaCollege";
console.log(name1.slice(4,9));//Colle
console.log(name1.indexOf("na"));//2
console.log(name1.replace("Apna","Our"));//OurCollege

//Q3

console.log(name1.slice(4).replace("l","t"));
let str=name1.slice(4);
console.log(str.replace("l","t"));
console.log(str.replaceAll("l","t"));

