const name = "Sairam";
const age = 23;
const job = "Web Developer";
const state = "AP";

const html = `
	<ul>
	<li>Name : ${name}</li>
	<li>Age : ${age}</li>
	<li>Job : ${job}</li>
	<li>State : ${state}</li>
	</ul>
`;

document.getElementById("output").innerHTML = html;