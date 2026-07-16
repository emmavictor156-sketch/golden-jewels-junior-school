// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    document.querySelectorAll("#navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });
}

// Sticky Header
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (header) {
        header.classList.toggle("scrolled", window.scrollY > 50);
    }
});

const slides = document.querySelectorAll(".slide");

let current = 0;

function nextSlide(){

slides[current].classList.remove("active");

current++;

if(current >= slides.length){

current = 0;

}

slides[current].classList.add("active");

}

setInterval(nextSlide,3000);

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};