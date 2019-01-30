document.addEventListener('DOMContentLoaded', () => {

    if (location.pathname.substr(1) === "" | location.pathname.substr(1) ===  ""){
        let item = document.getElementById("nav-home");
        item.classList.add("active");
    }

    if (location.pathname.substr(1) === "about/"){
        let item = document.getElementById("nav-about");
        item.classList.add("active");
    }


    if (location.pathname.substr(1) === "projects/"){
        let item = document.getElementById("nav-projects");
        item.classList.add("active");
    }

    if (location.pathname.substr(1) === "contact/"){
        let item = document.getElementById("nav-contact");
        item.classList.add("active");
    }
});
