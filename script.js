// console.log("script.js loaded");

const reveals = document.querySelectorAll(".reveal");
const hero = document.querySelector(".hero");
const navbar = document.querySelector(".navbar");
const sideNav = document.querySelector(".side-nav");

const heroObserver = new IntersectionObserver(
([entry]) => {
    if (entry.isIntersecting) {
    navbar.classList.remove("hidden");
    sideNav.classList.add("hidden");
    } else {
    navbar.classList.add("hidden");
    sideNav.classList.remove("hidden");
    }
},
{ threshold: 0.4 }
);

heroObserver.observe(hero);

const observer = new IntersectionObserver(
(entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("active");
    }
    });
},
{ threshold: 0.4 }
);

reveals.forEach((el) => observer.observe(el));