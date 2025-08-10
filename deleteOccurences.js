let arr=[1,2,3,4,5,6,2,3];
let num=2;


for(n of arr)
{
  if(arr[n]==num){
    arr.splice(n,1);
  }
}
console.log(arr);
