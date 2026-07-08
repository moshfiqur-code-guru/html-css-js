
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
    $('.projects').slick({
        slidesToShow: 3,
        dots: true,
        autoplay: true,

    });
});