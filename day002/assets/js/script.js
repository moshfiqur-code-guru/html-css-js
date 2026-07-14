
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

const openButton = document.querySelector(".play-button");
const video = document.querySelector(".video-overlay");
const videoFrame = document.getElementById("video-frame")

openButton.addEventListener("click", videoOpener)
video.addEventListener("click",  ()=>video.classList.remove("show"))
function videoOpener(){
    video.classList.add("show")
    videoFrame.src = "https://www.youtube.com/embed/WvCFX2BINZ4?autoplay=1&mute=1"
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


