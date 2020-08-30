document.querySelector('.btn-txt').addEventListener("click", loadText);

function loadText(e){
    fetch("fetch/data.txt")
    .then(function(res){
        return res.text()
    })
    .then(function(data){
        document.getElementById("textOutput").innerHTML = `<p>${data}</p>`;
    })
    .catch(function(err){
        console.log(err)
    });
}

document.querySelector('.btn-json').addEventListener("click", loadJson);

function loadJson(e){
    fetch("ajax/customers.json").then(function(res){
        return res.json()
    })
    .then(function(data){
        let output = '';
        data.forEach(function(li){
            output+=`<li>Name : ${li.name}</li>
                <li>Age: ${li.age}</li>
                <li>Extra: ${li.Extra}</li>
                <hr>
            `
        });
        document.getElementById("jsonOutput").innerHTML = output;
    })
    .catch(function(err){
        console.log(err)
    });
}


document.querySelector('.btn-api').addEventListener("click", loadAPI);

function loadAPI(e) {
    fetch("https://jsonplaceholder.typicode.com/posts").then(function(res){
        return res.text()
    })
    .then(function(data){
        const response = JSON.parse(data);
        let output = "";
        response.forEach(function(post){
            output+= `<li>${post.title}</li>`
        });
        document.getElementById("apiOutput").innerHTML = output;
    })
}