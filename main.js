const menu_btn = document.querySelector(".hamburger-menu");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.onclick = function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
}

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menu_btn.classList.remove("is-active");
    mobile_menu.classList.remove("is-active");
}))


ScrollReveal({
    reset: true,
    distance:'60px',
    delay: 50,
    duration: 1500
});

ScrollReveal().reveal('.navbar h2, .about-me-left', { delay: 50, interval:100, origin: 'left' });
ScrollReveal().reveal('.navbar .social-icons', { delay: 50, origin: 'right' });
ScrollReveal().reveal('.services h1, .header-1-and-link h1, .exp-box, .tools h1, .contact-right h1, .contact-right p', { delay: 50, origin: 'top', interval:100 });
ScrollReveal().reveal('.about-me img, .service-box, .project-box, .header-1-and-link a, .tool-box, .contact form, .footer', { delay: 50, origin: 'bottom', interval:100});