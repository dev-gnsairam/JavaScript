document.querySelector(".btn-text").addEventListener("click", loadAjax);

function loadAjax(e){

	const xhr = new XMLHttpRequest();

	xhr.open("GET", "ajax/data.txt", true);

	xhr.onprogress = function(){
		console.log(xhr.readyState);
	}

	xhr.onload = function(){
		if(this.status === 200){
			const response = this.responseText;
			document.getElementById("output").innerHTML = `<h1>${this.response}</h1>`;
		}
	}

	xhr.onerror = function(){
		console.log("request error...!")
	}

	xhr.send();

	/*
		200 --> OK
		403 --> Forbiddion
		404 --> Not Found
	*/
}


document.querySelector(".btn-json").addEventListener("click", loadCustomer);

function loadCustomer (e){
	const xhr = new XMLHttpRequest();

	// xhr.open("GET", "ajax/customer.json", true);

	xhr.open("GET", "ajax/customers.json", true);

	xhr.onload = function(){
		const response = JSON.parse(this.responseText);
		
		let output = '';

		response.forEach(function(user){
			output+= `
			Name : ${user.name} /
			Age : ${user.age} / 
			Extra : ${user.Extra} /`;
		});

		document.getElementById("output").innerHTML = output;
	}

	xhr.send();
}

document.querySelector(".btn-api").addEventListener("click", loadAPI);

function loadAPI(e){
	e.preventDefault();
	const numOfJokes = document.querySelector("#numberofJokes").value;
	
	const xhr = new XMLHttpRequest();

	xhr.open("GET", `http://api.icndb.com/jokes/random/${numOfJokes}`, true);

	xhr.onload = function(){
		
		if(this.status === 200){
			const response = JSON.parse(this.responseText);

			let output = '';

			if(response.type === 'success'){

				response.value.forEach(function(joke){
					output += `<li>${joke.joke}</li>`
				});

			} else {

				output += `<li>Something went wrong</li>`;

			}

			document.querySelector("#output").innerHTML = output;

		}
	}

	xhr.send();
}