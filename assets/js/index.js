function hidebar() {
	let menu = document.getElementById("menus");
	let full = document.getElementById('mainbar');
	if (menu.style.display=="none") {
		menu.style.display="block";
		full.style.marginLeft = "16%";
	}
	else {
		menu.style.display="none";
		full.style.marginLeft = "0%";
	}
}