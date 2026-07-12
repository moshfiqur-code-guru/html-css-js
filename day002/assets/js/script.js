
const header = document.getElementById("header-section");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        header.classList.add("scrollable");
    } else {
        header.classList.remove("scrollable");
    }
});

window.addEventListener("DOMContentLoaded", addAClass);

function addAClass() {
    document.body.classList.add("animation-start")
}


$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:40,
        dots: true
    });
});
