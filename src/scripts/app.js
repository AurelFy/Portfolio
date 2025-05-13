"use strict";

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

const cursor = document.querySelector('.cursor--center');

window.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});