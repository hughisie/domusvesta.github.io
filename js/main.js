/**
 * Domus Vesta Main JavaScript
 * This file contains all interactive functionality for the Domus Vesta website
 * Author: Manus AI
 * Version: 1.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initNavigation();
  initScrollAnimations();
  initTallyForms();
  initContactForm();
});

/**
 * Navigation functionality
 * - Mobile menu toggle
 * - Smooth scrolling for navigation links
 * - Header hide/show on scroll
 */
function initNavigation() {
  const header = document.querySelector('.header');
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');
  const navLinks = document.querySelectorAll('.nav__link');
  
  let lastScrollTop = 0;
  
  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navList.classList.toggle('active');
    });
  }
  
  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Close mobile menu if open
      if (navToggle && navToggle.classList.contains('active')) {
        navToggle.classList.remove('active');
        navList.classList.remove('active');
      }
      
      // Only apply smooth scroll if the link is an anchor on the same page
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        
        const targetId = href;
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const headerHeight = header.offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = targetPosition - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Header hide/show on scroll
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show/hide header based on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      // Scrolling down & past the threshold
      header.classList.add('header--hidden');
    } else {
      // Scrolling up
      header.classList.remove('header--hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

/**
 * Scroll animations
 * - Fade in elements as they enter the viewport
 * - Parallax effects
 */
function initScrollAnimations() {
  // Elements to animate on scroll
  const animatedElements = document.querySelectorAll('.fade-in');
  
  // Add fade-in class to specific elements
  const sections = document.querySelectorAll('section:not(.hero)');
  sections.forEach(section => {
    const sectionHeader = section.querySelector('.section-header');
    const contentElements = section.querySelectorAll('.about__content, .steps, .mission__content, .join__content, .partner__content, .news__grid, .contact__content');
    
    if (sectionHeader) sectionHeader.classList.add('fade-in');
    contentElements.forEach(el => el.classList.add('fade-in'));
  });
  
  // Check if elements are in viewport and add visible class
  function checkVisibility() {
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      
      // Element is in viewport
      if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
        element.classList.add('visible');
      }
    });
  }
  
  // Initial check on page load
  checkVisibility();
  
  // Check on scroll
  window.addEventListener('scroll', checkVisibility);
  
  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  }
}

/**
 * Initialize Tally.so forms
 * - Replace placeholders with actual Tally embed codes
 */
function initTallyForms() {
  // In a real implementation, these would be replaced with actual Tally.so embed codes
  // For now, we'll simulate the forms with placeholders
  
  const userFormPlaceholder = document.querySelector('[data-tally-form="user-signup"]');
  const partnerFormPlaceholder = document.querySelector('[data-tally-form="partner-signup"]');
  
  if (userFormPlaceholder) {
    userFormPlaceholder.innerHTML = `
      <form class="form">
        <div class="form__group">
          <label for="user-name" class="form__label">Name</label>
          <input type="text" id="user-name" class="form__input" placeholder="Your name" required>
        </div>
        <div class="form__group">
          <label for="user-email" class="form__label">Email</label>
          <input type="email" id="user-email" class="form__input" placeholder="Your email" required>
        </div>
        <div class="form__group">
          <label for="user-phone" class="form__label">Phone Number</label>
          <input type="tel" id="user-phone" class="form__input" placeholder="Your phone number">
        </div>
        <div class="form__group">
          <label class="form__label">I'm interested in:</label>
          <div class="form__checkbox">
            <input type="checkbox" id="user-interest-home" name="interest" value="home">
            <label for="user-interest-home">Home services</label>
          </div>
          <div class="form__checkbox">
            <input type="checkbox" id="user-interest-updates" name="interest" value="updates">
            <label for="user-interest-updates">Receiving updates</label>
          </div>
        </div>
        <button type="submit" class="btn btn--cta">Join Our Community</button>
      </form>
    `;
  }
  
  if (partnerFormPlaceholder) {
    partnerFormPlaceholder.innerHTML = `
      <form class="form">
        <div class="form__group">
          <label for="partner-name" class="form__label">Name</label>
          <input type="text" id="partner-name" class="form__input" placeholder="Your name" required>
        </div>
        <div class="form__group">
          <label for="partner-business" class="form__label">Business Name</label>
          <input type="text" id="partner-business" class="form__input" placeholder="Your business name" required>
        </div>
        <div class="form__group">
          <label for="partner-email" class="form__label">Email</label>
          <input type="email" id="partner-email" class="form__input" placeholder="Your email" required>
        </div>
        <div class="form__group">
          <label for="partner-phone" class="form__label">Phone Number</label>
          <input type="tel" id="partner-phone" class="form__input" placeholder="Your phone number">
        </div>
        <div class="form__group">
          <label for="partner-service" class="form__label">Service Category</label>
          <select id="partner-service" class="form__input" required>
            <option value="" disabled selected>Select your service category</option>
            <option value="electrical">Electrical</option>
            <option value="plumbing">Plumbing</option>
            <option value="carpentry">Carpentry</option>
            <option value="cleaning">Cleaning</option>
            <option value="gardening">Gardening</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" class="btn btn--cta">Register as Partner</button>
      </form>
    `;
  }
  
  // Add form submission handling
  const forms = document.querySelectorAll('.form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.textContent = 'Submitting...';
      submitButton.disabled = true;
      
      // Simulate API call delay
      setTimeout(() => {
        form.innerHTML = `
          <div class="form__success">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h3>Thank you!</h3>
            <p>Your submission has been received. We'll be in touch soon.</p>
          </div>
        `;
      }, 1500);
    });
  });
}

/**
 * Initialize contact form functionality
 */
function initContactForm() {
  const contactForm = document.querySelector('.contact__form form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      // Simulate API call delay
      setTimeout(() => {
        contactForm.innerHTML = `
          <div class="form__success">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. We'll respond to your inquiry as soon as possible.</p>
          </div>
        `;
      }, 1500);
    });
  }
}
