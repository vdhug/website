document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.language').forEach(function(button) {
        button.onclick = function(e) {
            e.preventDefault();
            // Initialize new request
            const request = new XMLHttpRequest();
            request.open('POST', '/change_language');

            // Callback function for when request completes
            request.onload = () => {
                // Extract JSON data from request
                const data = JSON.parse(request.responseText);
                // Update the result div
                if (data.success) {
                    location.reload();
                }
                else {
                    alert("Was not posible to translate. Sorry.")
                }

            }

            // Add data to send with request
            const data = new FormData();
            data.append('language', button.dataset.language);
            // Send request
            request.send(data);
            return false;
        };

    });

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
