function print(...args){
  for(let i=0;i<args.length;i++){
    console.log(args[i]);
  }
}
print(1,2,3,4);
print(1,2);


function coz(){
  console.log(arguments);
  console.log(arguments.length);
  //arguments.push(1); //not possible
}
coz(1,2,3);

function coz1(...args){
  console.log(args);
  console.log(args.length);
  args.push(99); //not possible
}
coz1(11,22,33);


function sum(...args){
  return args.reduce((sum,e)=>sum+e);
};
sum(0,2,3,4,5);

function min(msg,...args){
  console.log(msg);
  return args.reduce((min,el)=>
    {
    if(min>el)
    {
      return el;
    }else{
      return min;
    }
  });
;}
min("hello",24,74,75,90,32);