
document.addEventListener('DOMContentLoaded', () => {

    var welcome = document.getElementById("welcome-div");
    var home = document.getElementById("home-div");
    var arrowUp = document.getElementById("arrow-up");
    var arrowDown = document.getElementById("arrow-down");

    setTimeout(function () {
		welcome.classList.add("fadeInLeft");
	}, 1000);

    setTimeout(function () {
		home.classList.add("fadeInDownBig");
	}, 1500);

    setTimeout(function () {
		arrowUp.classList.add("fadeInUp");
	}, 00);

    setTimeout(function () {
		arrowDown.classList.add("fadeInDown");
	}, 00);

});
