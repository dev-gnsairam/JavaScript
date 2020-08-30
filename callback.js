const posts = [
	{title: "First Post Title", body: "First Post Body"},
	{title: "Second Post Title", body: "Second Post Body"},
	{title: "Third Post Title", body: "Third Post Body"},
];

function createPost(post, callback){
	setTimeout(function(){
		posts.push(post);
		callback();
	}, 2000)
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

createPost({title: "Fourth Post Title", body: "This is a fourth body"}, getPost);