// Animations

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


// Absolute position navbar home page

if (window.location.pathname == "/index.html" || window.location.pathname == "/index.html") {
    document.querySelector("nav").style.position = "absolute";
}