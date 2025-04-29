let a = 99999999999999.999999;
let b =  a*99999999999999.999999; 
console.log(a*999999999999); 
console.log('10' - '4' - '3' - 2 + '5'); 
console.log(!!'hello'); 
console.log(Number('hello')); 
console.log(Boolean([])); 



async function getData() {
    console.log("Fetching...");
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    console.log(data[0]);
  }
  
  getData();
  console.log("Before fetch");
  

