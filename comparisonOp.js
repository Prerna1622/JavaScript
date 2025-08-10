let p="123";
let r=123;

console.log(p==r); //compare value, not type
console.log(p===r); //compare type and value

//Comparison for Non-Numbers
let a='a';
let A='A';
let b='b';

console.log(a>A);
console.log(a>b);
console.log('*'>'&');
console.log('*'<'&');

//Because of Unicode Values ---> unicode.org
//'A'---> 41, 'B'---> 42
//'a'--->61, 'b'--->62