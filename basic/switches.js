const color = "yellow";

switch(color) {

	case 'red':
	console.log("it was red");
	break;

	case 'green':
	console.log("It was green");
	break;

	default:
	console.log("Color not matched");
	break;
}

let day;

switch(new Date().getDay()) {
	case 0:
	console.log("it was sunday")
	break;
	case 1:
	console.log("it was monday")
	break;
	case 2:
	console.log("it was tuesday")
	break;
	case 3:
	console.log("it was wednesday")
	break;
	case 4:
	console.log("it was thrusday")
	break;
	case 5:
	console.log("it was friday")
	break;
	case 6:
	console.log("it was saturday")
	break;

	default:
	console.log("Invalid date specified");
	break;
}