
document.addEventListener('DOMContentLoaded', () => {
    // Adding animations to elements
    var welcome = document.getElementById("welcome-div");
    var contact = document.getElementById("contact-div");
    var form = document.getElementById("contact-form");
    var arrowUp = document.getElementById("arrow-up");
    var arrowDown = document.getElementById("arrow-down");

    setTimeout(function () {
		welcome.classList.add("fadeInLeft");
	}, 1000);
    setTimeout(function () {
		form.classList.add("fadeInLeft");
	}, 1200);

    setTimeout(function () {
		contact.classList.add("fadeInDownBig");
	}, 1500);



    setTimeout(function () {
		arrowUp.classList.add("fadeInUp");
	}, 00);

    setTimeout(function () {
		arrowDown.classList.add("fadeInDown");
	}, 00);

});
