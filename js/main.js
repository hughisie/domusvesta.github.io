/**
 * DomusVesta Main JavaScript
 * Version: 2.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initParallaxEffects();
    initTabSystem();
    initScrollAnimations();
    initTallyForms();
    initScrollIndicator();
});

/**
 * Navigation functionality
 */
function initNavigation() {
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav__toggle');
    const navList = document.querySelector('.nav__list');
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Handle header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile navigation toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('nav__list--active');
            navToggle.classList.toggle('nav__toggle--active');
        });
    }
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    if (navList.classList.contains('nav__list--active')) {
                        navList.classList.remove('nav__list--active');
                        navToggle.classList.remove('nav__toggle--active');
                    }
                    
                    // Scroll to target
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
}

/**
 * Parallax scrolling effects
 */
function initParallaxEffects() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    
    if (parallaxSections.length > 0) {
        // Only apply parallax on desktop devices
        if (window.innerWidth > 768) {
            window.addEventListener('scroll', function() {
                parallaxSections.forEach(section => {
                    const distance = window.pageYOffset;
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    // Check if section is in viewport
                    if (distance > sectionTop - window.innerHeight && distance < sectionTop + sectionHeight) {
                        const background = section.querySelector('.hero__placeholder, .about__img');
                        
                        if (background) {
                            // Parallax effect intensity
                            const speed = 0.5;
                            const yPos = (distance - sectionTop) * speed;
                            
                            // Apply transform
                            background.style.transform = `translateY(${yPos}px)`;
                        }
                    }
                });
            });
        }
    }
}

/**
 * Tab system for How It Works section
 */
function initTabSystem() {
    const tabButtons = document.querySelectorAll('.tabs__btn');
    const tabPanels = document.querySelectorAll('.tabs__panel');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                tabButtons.forEach(btn => {
                    btn.classList.remove('tabs__btn--active');
                });
                
                // Add active class to clicked button
                this.classList.add('tabs__btn--active');
                
                // Show corresponding panel
                const targetTab = this.getAttribute('data-tab');
                
                tabPanels.forEach(panel => {
                    panel.classList.remove('tabs__panel--active');
                });
                
                document.getElementById(`${targetTab}-panel`).classList.add('tabs__panel--active');
            });
        });
    }
}

/**
 * Scroll animations for elements
 */
function initScrollAnimations() {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll('.section-header, .step, .pillar, .about__content, .news-card');
    
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Initialize Tally.so form embeds
 */
function initTallyForms() {
    const partnerForm = document.querySelector('[data-tally-form="partner-signup"]');
    const customerForm = document.querySelector('[data-tally-form="customer-signup"]');
    
    if (partnerForm) {
        partnerForm.innerHTML = '<iframe src="https://tally.so/embed/placeholder-partner-form" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0" title="Service Partner Registration"></iframe>';
    }
    
    if (customerForm) {
        customerForm.innerHTML = '<iframe src="https://tally.so/embed/placeholder-customer-form" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0" title="Customer Pre-registration"></iframe>';
    }
}

/**
 * Scroll indicator functionality
 */
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.hero__scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const welcomeSection = document.getElementById('welcome');
            
            if (welcomeSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const welcomePosition = welcomeSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = welcomePosition - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
}

/**
 * Helper function to check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
    );
}
