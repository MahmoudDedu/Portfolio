document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS library
  AOS.init({
    duration: 1000,
    once: true
  });

  // Portfolio filtering
  const filterButtons = document.querySelectorAll('.portfolio-filters button');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');
      portfolioItems.forEach(item => {
        item.style.display = (filter === 'all' || item.getAttribute('data-category') === filter) ? 'block' : 'none';
      });
    });
  });

  // Mobile menu toggle
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  let isMenuOpen = false;

  let hamburger = document.querySelector('.hamburger');
  if (!hamburger) {
    hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    hamburger.setAttribute('aria-label', 'Toggle menu');
    header.insertBefore(hamburger, nav);
  }

  hamburger.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    nav.classList.toggle('active', isMenuOpen);
    hamburger.innerHTML = isMenuOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  // Close menu on link click
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      isMenuOpen = false;
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Back to top button
  const backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Initialize Swiper instances
  new Swiper(".attendance-slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  new Swiper(".realestate-slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});