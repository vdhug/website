
document.addEventListener('DOMContentLoaded', () => {

    var about = document.getElementById("about-me");
    var accordion = document.getElementById("accordion");

    setTimeout(function () {
		about.classList.add("fadeInLeft");
	}, 1000);

    setTimeout(function () {
		accordion.classList.add("fadeInLeft");
	}, 2000);


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
