import { sectionObserver, initObserver, footerNavObserver } from './observer.js';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

// Apply Active Style to Navigation Links Based on Section Visibility
sectionObserver(document.querySelectorAll('.section'))

// Observer animation
initObserver(document.querySelectorAll('.nav__link'), 'enlarge', 0.5);
initObserver(document.querySelectorAll('.feature-icon'), 'enlarge', 0.5);
initObserver(document.querySelectorAll('.company'), 'enlarge', 0.5);
initObserver(document.querySelectorAll('.social-link'), 'enlarge', 0.5);
initObserver(document.querySelector('.section-hero .text-box '), 'moveBack', 0.5);
initObserver(document.querySelector('.section-hero .img-box'), 'moveBack', 0.5);
initObserver(document.querySelector('.section-features .text-box '), 'moveBack', 0.5);
initObserver(document.querySelector('.section-features .img-box'), 'moveBack', 0.5);
initObserver(document.querySelector('.section-statistics'), 'moveBack', 0.5);
initObserver(document.querySelector('.header-pricing'), 'moveBack', 0.3);
initObserver(document.querySelector('.pricing'), 'moveBack', 0.1);
initObserver(document.querySelector('.header-map'), 'moveBack', 0.3);
initObserver(document.querySelector('.map'), 'moveBack', 0.2);
initObserver(document.querySelector('.header-testimonial'), 'moveBack', 0.3);
initObserver(document.querySelector('.section-cta'), 'moveSlightlyBack', 0.5);


// statistics Counting Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateValue(entry.target, 1, +entry.target.textContent, 3000);
      observer.unobserve(entry.target)
    }
  });
}, { threshold: 0.1 });

const statNums = document.querySelectorAll('.stat-num');
statNums.forEach(element => observer.observe(element))

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  window.requestAnimationFrame(step);
  function step(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
}

// Testimonial carousel
const swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Footer Navigation's Animation
footerNavObserver(document.querySelectorAll(".nav-list"), 'moveBack')