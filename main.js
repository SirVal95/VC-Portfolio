ScrollReveal({
    reset: true,
    distance:'60px',
    delay: 50,
    duration: 1500
});

ScrollReveal().reveal('.navbar h2, .about-me-left', { delay: 50, interval:100, origin: 'left' });
ScrollReveal().reveal('.navbar .social-icons', { delay: 50, origin: 'right' });
ScrollReveal().reveal('.services h1, .header-1-and-link h1', { delay: 50, origin: 'top' });
ScrollReveal().reveal('.about-me img, .service-box, .project-box, .header-1-and-link a', { delay: 50, origin: 'bottom', interval:100});