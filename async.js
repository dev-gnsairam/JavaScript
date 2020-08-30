async function myFunc(){
    return "Hello";

    
}
// myFunc().then((res)=>console.log(res))

async function getUsers(){

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await res.json();

    return data;
}

getUsers().then((res)=>console.log(res))