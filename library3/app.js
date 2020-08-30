const http = new EasyHttp();

http.get("https://jsonplaceholder.typicode.com/posts/1").then(res => console.log(res)).catch(err => console.log(err));

const postData = {
    title: "I am Test post inserted title"
}
http.post("https://jsonplaceholder.typicode.com/posts", postData).then(res => console.log(res)).catch(err => console.log(err));

const putData = {
    username: "Updated PUT Query"
}
http.post("https://jsonplaceholder.typicode.com/users/1", putData).then(res => console.log(res)).catch(err => console.log(err));
http.delete("https://jsonplaceholder.typicode.com/users/1").then(res => console.log(res)).catch(err => console.log(err));