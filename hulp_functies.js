function nlog(str) { console.log("[-] " + arguments.callee.caller.name + "(): " + str); }
function plog(str) { console.log("[+] " + arguments.callee.caller.name + "(): " + str); }

function is_element_visible(element) {
	if(!element.style.display || element.style.display == "none") {
		return false;
	} else {
		return true;
	}
}

function toggle_display(naam) {
	element = document.getElementById(naam);
	if(element) {
		if(! is_element_visible(element) ) {
			element.style.display = "block";
		} else {
			element.style.display = "none";
		}
	}
}

// Source: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
