"use strict";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// NAVIGATION MOBILE
  const menuBtn = document.querySelector(".menu--burger");
  const menu = document.querySelector(".menu--links");
  const menuLinks = document.querySelectorAll(".menu--links__el");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("menu--links__hidden");
    });
  }

  if (menu && menuLinks.length > 0) {
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.toggle("menu--links__hidden");
      });
    });
  }

  // CURSEUR PERSO
  const cursor = document.querySelector(".cursor--center");
  const circle = document.querySelector(".cursor--circle");

  if (cursor && circle) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.15;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    function animateCursor() {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      circle.style.left = `${currentX}px`;
      circle.style.top = `${currentY}px`;

      requestAnimationFrame(animateCursor);
    }

    animateCursor();
  }

  // ANIMATIONS GSAP
  gsap.registerPlugin(ScrollTrigger);

  const aboutText = document.querySelector('.about--text');
  const presAppear = document.querySelector('.pres--appear');

  if (aboutText) {
    gsap.from('.about--text', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top 50%',
        toggleActions: 'restart reset restart reset',
      },
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.4,
      ease: 'power2.out'
    });
  }

  if (presAppear) {
    gsap.from('.pres--appear', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      ease: 'power2.out'
    });
  }

  // ANIMATION TITRE CASE STUDY/CREDITS

const titres = document.querySelectorAll('.title--prj', );

titres.forEach((titre) => {
  const texte = titre.textContent;
  titre.innerHTML = '';

  texte.split('').forEach((letter) => {
    const span = document.createElement('span');
    span.classList.add('title--prj__span')
    span.textContent = letter;
    span.style.display = 'inline-block';
    titre.appendChild(span);
  });
});

const titlePrj = document.querySelector('.title--prj__span')
const credAnim = document.querySelector('.cred--anim')

gsap.from('.title--prj__span, .cred--anim', {
  opacity: 0,
  x: -20,
  duration: 0.8,
  stagger: 0.2,
  ease: 'back.out(1.7)'
});
  





gsap.utils.toArray(".chapter--deco__number").forEach((el) => {
  const innerElements = el.querySelectorAll("*");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 70%",
      toggleActions: "restart reset restart reset"
    }
  });

  tl.from(innerElements, {
    opacity: 0,
    x: -30,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.3, 
  });
});