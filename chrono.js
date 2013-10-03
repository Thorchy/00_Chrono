var running = false;
var seconds = 0;

function start() {
	running = true
	setTimeout(timer, 1000);
}

function cont() {
	running = true;
	setTimeout(timer, 1000);
}

function pause() {
	running = false;
	clearTimeout()
}

function timer() {
	if(running) {
		seconds++;

		var paragraph = document.createElement("p");
		paragraph.innerHTML = seconds;
		document.getElementById("response").innerHTML = "";
		document.getElementById("response").appendChild(paragraph);
		
		setTimeout(timer, 1000);
	} else {
		clearTimeout();
	}
}