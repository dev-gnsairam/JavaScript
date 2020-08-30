const element = document.createElement("h1");
element.className = "Test newClass";
element.id = "test id";
element.setAttribute("title", "I am title");
element.appendChild(document.createTextNode("I am content"));
document.querySelector("#output").appendChild(element);
console.log(element);

