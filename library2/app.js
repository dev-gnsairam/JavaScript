const http = new easyHttp();
// const data = http.get("https://jsonplaceholder.typicode.com/users").then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err)
// })

const UserData = {
    name: "john Doe",
    email: "test@Test.com",
    username: "testname"
}
// http.post("https://jsonplaceholder.typicode.com/users", UserData)
// .then(data => console.log(data))
// .catch(err => console.log(err))


// http.put("https://jsonplaceholder.typicode.com/users/6", UserData)
// .then(data => console.log(data))
// .catch(err => console.log(err))

http.delete("https://jsonplaceholder.typicode.com/users/6", UserData)
.then(data => console.log(data))
.catch(err => console.log(err))