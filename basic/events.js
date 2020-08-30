document.querySelector(".btn-event").addEventListener("mousedown", loadEventFunction);

function loadEventFunction(e) {
	e.preventDefault(); // Preventing submit or href redirect
	console.log(e.type);
}

/*
	Mouse Clik:-
		
	click
	dblclick
	mousedown
	mouseup
	mouseenter
	mouseleave
	mouseover
	mouseout
	mousemove

	offsetX
	offsetY


	Keyboard Events:-

	submit
	keydown
	keyup
	keypress
	focus
	blur
	cut
	paste
	input
	change --> for dropdown
*/

// Event Bubbling

/*
	
	if we put event on a selector and also upto parent it will bubble up event
*/
