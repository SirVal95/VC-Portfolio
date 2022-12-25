ScrollReveal({
    reset: true,
    distance:'60px',
    delay: 50,
    duration: 1500
});

ScrollReveal().reveal('.navbar h2, .about-me-left', { delay: 50, interval:100, origin: 'left' });
ScrollReveal().reveal('.navbar .social-icons', { delay: 50, origin: 'right' });
ScrollReveal().reveal('', { delay: 50, origin: 'top' });
ScrollReveal().reveal('.about-me img', { delay: 50, origin: 'bottom' });