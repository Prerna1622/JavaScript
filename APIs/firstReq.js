let url="https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
  console.log(res); //data aya-- then result ko print kra do
    return res.json(); //data ko parse kra do
})
.then((data1)=>{      /*agar data parsing successful huyi to fir  data ko print kro*/
  console.log(data1.fact);
  return fetch(url);
})
.then((res)=>{
  return res.json();
})
.then((data2)=>{      
  console.log(data2.fact);
})
.catch((err)=>{
  console.log("ERROR - ",err);
});

//Fetch is the built in API used to make HTTP request and get a response.

//It return promise, which makes it easy to work with asynchrounous 

console.log("I am Happy");