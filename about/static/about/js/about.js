
document.addEventListener('DOMContentLoaded', () => {

    var about = document.getElementById("about-me");
    var accordion = document.getElementById("accordion");
    var profile = document.getElementById("profile-picture");
    var arrowUp = document.getElementById("arrow-up");
    var arrowDown = document.getElementById("arrow-down");

    setTimeout(function () {
		about.classList.add("fadeInLeft");
	}, 500);

    setTimeout(function () {
		accordion.classList.add("fadeInLeft");
	}, 1000);
    setTimeout(function () {
		profile.classList.add("fadeInDown");
	}, 1500);

    var i = 0;

    document.querySelectorAll('.progress-count').forEach(function(tech) {
        
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



    // var icons = document.querySelectorAll('.accordion-toggle');
    // debugger
    // for (i =0; i<icons.length; i++){
    //     var icon = icons[i];
	// 	icon.onclick = function() {
    //         debugger
    //         alert(icon.dataset.name);
    //         // if (icon.classList.contains('icon-selected')) {
    //         //     icon.classList.remove("icon-selected");
    //         // }
    //         // else {
    //         //     icon.classList.add("icon-selected");
    //         // }
    //     }
	// }
});
