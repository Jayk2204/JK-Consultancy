// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-times');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Document stack animation on hover
    const documentStack = document.querySelector('.document-stack');
    if (documentStack) {
        documentStack.addEventListener('mouseenter', function() {
            const docs = this.querySelectorAll('img');
            docs[0].style.transform = 'rotate(-10deg) translateY(-10px)';
            docs[1].style.transform = 'rotate(5deg) translateY(-5px)';
            docs[2].style.transform = 'rotate(15deg) translateY(0)';
        });
        
        documentStack.addEventListener('mouseleave', function() {
            const docs = this.querySelectorAll('img');
            docs[0].style.transform = 'rotate(-5deg)';
            docs[1].style.transform = 'rotate(3deg)';
            docs[2].style.transform = 'rotate(8deg)';
        });
    }
    
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to your server
            // For now, we'll just show an alert
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
    }
});