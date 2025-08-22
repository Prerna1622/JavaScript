let url="https://catfact.ninja/fact";

async function getFacts(){
  try{
    let res= await fetch(url); //response aane tak ruko
    let data=await res.json();// then parse hone tak ruko
    console.log(data.fact); //then print

    let res2=await fetch(url);
    let data2=await res2.json();
    console.log(data2.fact);
  }catch(e){
    console.log(e);
  }
  console.log("Bye");
}
getFacts();