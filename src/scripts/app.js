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

const menu = document.querySelector('.menu');

function sup(el1, el2) {
  const r1 = el1.getBoundingClientRect();
  const r2 = el2.getBoundingClientRect();

  return !(
    r1.right < r2.left ||
    r1.left > r2.right ||
    r1.bottom < r2.top ||
    r1.top > r2.bottom
  );
}

function check() {
  const elements = document.querySelectorAll('body *:not(.menu)');
  let contact = false;

  elements.forEach(el => {
    if (sup(menu, el)) {
      contact = true;
    }
  });

  if (contact) {
    menu.classList.add('menu--sup');
  } else {
    menu.classList.remove('menu--sup');
  }
}

window.addEventListener('scroll', check);
window.addEventListener('resize', check);
window.addEventListener('load', check);