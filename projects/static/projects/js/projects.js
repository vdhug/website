
document.addEventListener('DOMContentLoaded', () => {

    var projects = document.getElementById("projects");


    setTimeout(function () {
		projects.classList.add("fadeInLeft");
	}, 800);

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
