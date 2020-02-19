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
    document.querySelector(".mobile-nav").style.width = "80vw";
});

document.querySelector(".mobile-nav i").addEventListener("click", function() {
    document.querySelector(".mobile-nav").style.width = "0";
});



// Scroll Reveal

// Scroll Reveal

window.sr = ScrollReveal({
    reset: false,
    mobile: true
});

sr.reveal('.section-about-info', {
    delay: 500,
    duration : 1500,
});

sr.reveal('.product', {
    duration : 1500,
});

sr.reveal('.team-member', {
    duration : 1500,
});

// sr.reveal('.section-heading', {
//     delay: 500,
//     duration : 2000,
//     origin: "top",
//     distance: 200
// });

sr.reveal('.left-info > div', {
    delay: 500,
    duration : 1500,
    origin: "left",
    distance: "250px"
});

sr.reveal('.right-info > div', {
    duration : 1500,
    origin: "right",
    distance: "250px"
});
sr.reveal('.page-intro-left > div', {
    duration : 1500,
    origin: "left",
    distance: "250px"
});

sr.reveal('.page-intro-right > div', {
    duration : 1500,
    origin: "right",
    distance: "250px"
});

sr.reveal('.about-mission', {
    duration : 2000,
    origin: "right",
    distance: "250px"
});

sr.reveal('.about-vision', {
    duration : 2000,
    origin: "left",
    distance: "250px"
});
