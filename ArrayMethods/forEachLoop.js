let student=[
{
  name:"prerna",
  marks:95
},
{
  name:"rani",
  marks:65
},
{
  name:"shradha",
  marks:85
}];

student.forEach((student)=>{
  console.log(student.marks);
});

let arr=[1,2,3,4,5];
let print=function(element){
  console.log(element);
};
arr.forEach(print);