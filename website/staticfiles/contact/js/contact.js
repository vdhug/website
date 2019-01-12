
document.addEventListener('DOMContentLoaded', () => {
    // Adding animations to elements
    var welcome = document.getElementById("welcome-div");
    var contact = document.getElementById("contact-div");
    var form = document.getElementById("contact-form");

    setTimeout(function () {
		welcome.classList.add("fadeInLeft");
	}, 1000);
    setTimeout(function () {
		form.classList.add("fadeInLeft");
	}, 1200);

    setTimeout(function () {
		contact.classList.add("fadeInDownBig");
	}, 1500);

});
