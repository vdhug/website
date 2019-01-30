
document.addEventListener('DOMContentLoaded', () => {
    // Adding animations to elements
    var welcome = document.getElementById("welcome-div");
    var home = document.getElementById("home-div");
    // var arrowUp = document.getElementById("arrow-up");
    // var arrowDown = document.getElementById("arrow-down");

    setTimeout(function () {
		welcome.classList.add("fadeInLeft");
	}, 1000);

    setTimeout(function () {
		home.classList.add("fadeInDownBig");
	}, 1500);

});
