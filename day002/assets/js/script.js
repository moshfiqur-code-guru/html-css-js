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
video.addEventListener("click", () => video.classList.remove("show"))

function videoOpener() {
    video.classList.add("show")
    videoFrame.src = "https://www.youtube.com/embed/WvCFX2BINZ4?autoplay=1&mute=1"
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 40,
        dots: true
    });
});

const sendBtn = document.getElementById("send-btn");
const input = document.getElementById("email");
sendBtn.classList.add("disabled")
input.classList.add("disabled")
input.addEventListener("input", () => {
    if (input.value.trim() === "") {
        sendBtn.classList.add("disabled")
        input.classList.add("disabled")
    } else {
        sendBtn.classList.remove("disabled")
        input.classList.remove("disabled")
    }
});


/*
* SCROLL TOP ANIMATION & SCROLLING
* PROGRESS DETECTION
*  */

const path = document.querySelector(".progress-circle path");
const totalLength = path.getTotalLength();
const scrollTopBtn = document.querySelector(".scroll-top");
path.style.strokeDasharray = totalLength
path.style.strokeDashoffset = totalLength;

function toggleVisible(top, height) {
    if (top > height) {
        scrollTopBtn.classList.add("show")
    } else {
        scrollTopBtn.classList.remove("show")
    }
}

function scrollToTopOnClick() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}

function updateScrollProgress() {
    const currentScrollPos = scrollY;
    const screenHeight = innerHeight;
    toggleVisible(currentScrollPos, screenHeight)
    const docTotalHeight = document.documentElement.scrollHeight;
    const scrollableHeight = docTotalHeight - screenHeight;
    const scrollPosition = currentScrollPos / scrollableHeight;
    const alreadyProgressed = scrollPosition * totalLength;
    const progressable = totalLength - alreadyProgressed;
    path.style.strokeDashoffset = progressable;

}

updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress)
scrollTopBtn.addEventListener("click", scrollToTopOnClick)


