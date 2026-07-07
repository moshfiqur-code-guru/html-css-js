
const header = document.getElementById("header-section");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        header.classList.add("scrollable");
    } else {
        header.classList.remove("scrollable");
    }
});
