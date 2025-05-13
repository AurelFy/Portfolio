"use strict";

import {gsap} from "gsap"; 
import {ScrollTrigger} from "gsap/ScrollTrigger"; 


// NAVIGATION MOBILE

var menuBtn = document.querySelector(".menu--burger");
menuBtn.addEventListener("click", openMenu);

function openMenu(){
  var menu = document.querySelector(".menu--links");
  menu.classList.toggle("menu--links__hidden");
  }

var menuLinks = document.querySelectorAll(".menu--links__el");

menuLinks.forEach(function(link) {
    link.addEventListener("click", hideMenu);
});
    
function hideMenu() {
    var menu = document.querySelector(".menu--links");
    menu.classList.toggle("menu--links__hidden");
} 

// REGLE LE PROBLEME D'AFFICHAGE AU LOAD

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

// CURSEUR PERSO 

const cursor = document.querySelector('.cursor--center');
const circle = document.querySelector('.cursor--circle');

window.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
const speed = 0.15; // Plus c'est bas, plus le mouvement est lent (0.1 = délai ~0.5s)

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  circle.style.left = `${currentX}px`;
  circle.style.top = `${currentY}px`;

  requestAnimationFrame(animate);
}

animate();


// ANIMATION TEXTE

gsap.registerPlugin(ScrollTrigger);

gsap.from('.about--text', {
  scrollTrigger: {
    trigger : '.about', 
    start : 'top 50%',
    toggleActions : 'restart reset restart reset'
  }, 
  x : -50,
  opacity : 0, 
  duration : 1,
  stagger : 0.6, 
  ease : 'power2.out' 
}); 

gsap.from('.pres--appear', { 
  y : 50,
  opacity : 0, 
  duration : 1,
  stagger : 0.5, 
  ease : 'power2.out' 
}); 