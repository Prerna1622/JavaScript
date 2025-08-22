let btn=document.querySelector("button");
//let ul=document.querySelector("ul");
//let body=document.querySelector("body");
let p=document.querySelector("p");

let url="https://catfact.ninja/fact";


async function getFacts()
{
  try{
    let res=await axios.get(url);
    p.innerText=res.data.fact;
    console.log(p);


    // let li=document.createElement("li");
    // li.innerText=res.data.fact;
    // console.log(li);
    // ul.appendChild(li);

    // let h3=document.createElement("h3");
    // h3.innerText=res.data.fact;
    // body.appendChild(h3);
  }catch(e){
    console.log("Error -",e);
    return "No fact Found";
  }
}



btn.addEventListener("click",()=>{
  // let facts=getFacts();
  // console.log(facts);
  getFacts();
});

//Axios--> compact method of sending request. Its is generally Library. It internally usese fetch().

//axios ke adar directly exact data aata hai, do not need to parse that data.