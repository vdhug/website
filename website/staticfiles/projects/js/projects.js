
document.addEventListener('DOMContentLoaded', () => {

    var project_company = document.getElementById("project-company");
    var accordion = document.getElementById("accordion");
    var logo = document.getElementById("logo-picture");
    var network = document.getElementById("network");



    setTimeout(function () {
		project_company.classList.add("fadeInLeft");
	}, 500);

    setTimeout(function () {
		accordion.classList.add("fadeInLeft");
	}, 1000);
    setTimeout(function () {
		logo.classList.add("fadeInDown");
	}, 1500);

    setTimeout(function () {
		network.classList.add("fadeInDown");
	}, 2000);






    // Track what icon has been selected and changes his style
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
