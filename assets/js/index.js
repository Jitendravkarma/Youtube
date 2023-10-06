function largbar() {
	let bar = document.getElementById('sidebar');
	let main = document.getElementById('content');
	if (bar.style.display === "none") {
		bar.style.display ="block";
		main.style.width ="80%";
	}
	else {
		bar.style.display ="none";
		main.style.width ="100%";
	}
}
function smallbar() {
	let bar = document.getElementById('sidebar');
	let main = document.getElementById('content');
	if (bar.style.left === "0%") {
		bar.style.left ="-50%";
	}
	else {
		bar.style.left ="0%";
	}
}