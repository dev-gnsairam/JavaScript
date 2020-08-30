const http = new easyHTTP();

const get = http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, data){
	if(err){
		console.log(err)
	} else {
		console.log(data)
	}
});


// POST Request

const data = {
	title: "This is a test title",
	body: "This is a test body"
};

http.post("https://jsonplaceholder.typicode.com/posts", data, function(err, data){
	if(err){
		console.log(err)
	} else {
		console.log(data)
	}
});


// PUT Request

const put = {
	title: "Updated Post Title",
	body: "Updated Post body"
};

http.post("https://jsonplaceholder.typicode.com/posts/1", put, function(err, data){
	if(err){
		console.log(err)
	} else {
		console.log(data)
	}
});

http.delete("https://jsonplaceholder.typicode.com/posts/1", function(err, data){
	if(err){
		console.log(err)
	} else {
		console.log(data)
	}
});