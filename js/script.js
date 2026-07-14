// Fade in sections when scrolling

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        if(position < window.innerHeight - 120){

            section.classList.add("show");

        }

    });

});


// Back to Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.onscroll = function(){

if(document.documentElement.scrollTop > 300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

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

setInterval(nextSlide,4000);

// Mobile Menu

const menu = document.getElementById("mobile-menu");

const navbar = document.getElementById("navbar");

menu.addEventListener("click", function(){

navbar.classList.toggle("active");

});

// Animated Counters

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const current = +counter.innerText;

const increment = target / 100;

if(current < target){

counter.innerText = Math.ceil(current + increment);

setTimeout(updateCounter,20);

}

else{

counter.innerText = target;

}

};

updateCounter();

});


// Back to Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

};

topBtn.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};