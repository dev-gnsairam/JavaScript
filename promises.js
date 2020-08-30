/*
	Promises are alternative to callbacks.
*/

const posts = [
	{title: "First Post Title", body: "First Post Body"},
	{title: "Second Post Title", body: "Second Post Body"},
	{title: "Third Post Title", body: "Third Post Body"},
];

function createPost(post){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			posts.push(post);
			let error = false;
			if(error){
				reject("Error: Something Went Wrong");
			} else {
				resolve();
			}
		}, 2000);
	});
}

function getPost(){
	setTimeout(function(){
		let output = '';
		posts.forEach(function(post){
			output+=`<li>${post.title}</li>`;
		})

		document.getElementById("output").innerHTML = output;
	});
}

createPost({title: "Fourth Post Title", body: "This is a fourth body"}).then(getPost).catch(function(err){
	console.log(err)
});