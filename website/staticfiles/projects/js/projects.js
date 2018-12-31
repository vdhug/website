
document.addEventListener('DOMContentLoaded', () => {

    var project_company = document.getElementById("project-company");
    var accordion = document.getElementById("accordion");
    var logo = document.getElementById("logo-picture");
    var arrowUp = document.getElementById("arrow-up");
    var arrowDown = document.getElementById("arrow-down");

    setTimeout(function () {
		project_company.classList.add("fadeInLeft");
	}, 500);

    setTimeout(function () {
		accordion.classList.add("fadeInLeft");
	}, 1000);
    setTimeout(function () {
		logo.classList.add("fadeInDown");
	}, 1500);

    var i = 0;

    document.querySelectorAll('.progress-count').forEach(function(tech) {
        debugger
        setTimeout(function () {
    		tech.classList.add("fadeInLeft");
    	}, (i*500)+2200);
        i++;
    });

    setTimeout(function () {
		arrowUp.classList.add("fadeInUp");
	}, 00);

    setTimeout(function () {
		arrowDown.classList.add("fadeInDown");
	}, 00);

    document.querySelectorAll('.accordion-toggle').forEach(function(icon) {
		icon.onclick = function() {
            if (icon.classList.contains('icon-selected')) {
                icon.classList.remove("icon-selected");
            }
            else {

                var old = document.getElementsByClassName("icon-selected");
                if (old.length > 0){
                    old[0].classList.remove("icon-selected");
                }
                icon.classList.add("icon-selected");
            }
        }

    });
});
