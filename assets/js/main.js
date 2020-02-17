// Animations

if (window.location.pathname == "/index.html" || window.location.pathname == "" || window.location.pathname == "contact.html") {
    document.querySelector(".contact-info a:nth-child(2)").addEventListener("mouseover", function () {
        document.querySelector(".contact-info a:nth-child(2) i").classList.toggle("fa-envelope");
        document.querySelector(".contact-info a:nth-child(2) i").classList.toggle("fa-envelope-open");
    });

    document.querySelector(".contact-info a:nth-child(2)").addEventListener("mouseout", function () {
        document.querySelector(".contact-info a:nth-child(2) i").classList.toggle("fa-envelope");
        document.querySelector(".contact-info a:nth-child(2) i").classList.toggle("fa-envelope-open");
    });

    document.querySelector(".contact-info a:nth-child(3)").addEventListener("mouseover", function () {
        document.querySelector(".contact-info a:nth-child(3) i").classList.toggle("fa-map-marker-alt")
        document.querySelector(".contact-info a:nth-child(3) i").classList.toggle("fa-map-marked-alt")
    });

    document.querySelector(".contact-info a:nth-child(3)").addEventListener("mouseout", function () {
        document.querySelector(".contact-info a:nth-child(3) i").classList.toggle("fa-map-marker-alt")
        document.querySelector(".contact-info a:nth-child(3) i").classList.toggle("fa-map-marked-alt")
    });
}


// Absolute position navbar home page

if (window.location.pathname == "/index.html" || window.location.pathname == "") {
    document.querySelector("nav").style.position = "absolute";
}

// Mobile Menu

document.querySelector(".mobile-nav-icon").addEventListener("click", function() {
    document.querySelector(".mobile-nav").style.visibility = "visible";
    document.querySelector(".mobile-nav").style.opacity = "1";
});

document.querySelector(".mobile-nav i").addEventListener("click", function() {
    document.querySelector(".mobile-nav").style.visibility = "hidden";
    document.querySelector(".mobile-nav").style.opacity = "0";
});