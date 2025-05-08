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

