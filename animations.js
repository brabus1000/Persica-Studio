
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize page transition animation
    document.body.classList.add('page-transition');
    
    // Add scroll progress bar
    addScrollProgressBar();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Enhance navigation menu
    enhanceNavMenu();
    
    // Add card animations
    setupCardAnimations();
    
    // Apply button animations
    setupButtonAnimations();
  });
  
  // Add scroll progress bar
  function addScrollProgressBar() {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'scroll-progress-container';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    
    progressContainer.appendChild(progressBar);
    document.body.appendChild(progressContainer);
    
    window.addEventListener('scroll', function() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }
  
  // Setup scroll-triggered animations
  function setupScrollAnimations() {
    // Add classes to elements we want to animate
    const sections = document.querySelectorAll('section > div');
    sections.forEach(section => section.classList.add('fade-in'));
    
    const images = document.querySelectorAll('section img');
    images.forEach(img => {
      const wrapper = document.createElement('div');
      wrapper.className = 'img-reveal';
      img.parentNode.insertBefore(wrapper, img);
      wrapper.appendChild(img);
    });
    
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
      if (!heading.closest('nav') && !heading.closest('footer')) {
        heading.classList.add('fade-in');
      }
    });
    
    // Check elements on load
    checkVisibility();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkVisibility);
  }
  
  // Check if elements are visible in viewport
  function checkVisibility() {
    const fadeElements = document.querySelectorAll('.fade-in, .img-reveal');
    
    fadeElements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }
  
  // Helper function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.left >= 0 &&
      rect.bottom >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Enhance navigation menu with smooth animations
  function enhanceNavMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navContent = document.getElementById('nav-content');
    
    // Replace hidden class with our animation classes
    if (navToggle && navContent) {
      navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (navContent.classList.contains('show')) {
          navContent.classList.remove('show');
          setTimeout(() => {
            navContent.classList.add('hidden');
          }, 300);
        } else {
          navContent.classList.remove('hidden');
          setTimeout(() => {
            navContent.classList.add('show');
          }, 10);
        }
      });
      
      // Update the check function to handle our animations
      window.check = function(e) {
        var target = (e && e.target) || (event && event.srcElement);
  
        if (!checkParent(target, navContent)) {
          if (checkParent(target, navToggle)) {
            // This is now handled by the click event above
          } else {
            navContent.classList.remove('show');
            setTimeout(() => {
              navContent.classList.add('hidden');
            }, 300);
          }
        }
      };
    }
    
    // Add text highlight effect to nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      if (!link.querySelector('img')) { // Skip logo
        link.classList.add('text-highlight');
      }
    });
  }
  
  // Add animations to cards
  function setupCardAnimations() {
    const cards = document.querySelectorAll('.flex-1.bg-white.rounded-t');
    cards.forEach(card => {
      const parentDiv = card.closest('.w-full.md\\:w-1\\/3');
      if (parentDiv) {
        parentDiv.classList.add('card-animate');
      }
    });
  }
  
  // Apply button animations
  function setupButtonAnimations() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.classList.add('animated');
    });
  }
