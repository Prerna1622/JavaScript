const student={
  uname:"prerna",
  age:22,
  marks:94.4,
  city:"Pune"
};
student.city="Mumbai";
student.gender="female";
student.marks=[23,56,78,98];
delete student.age;
console.log(student.city);
console.log(student);