
/*================== toggle icon navbar ==================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-item');

menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
};

/*================== scroll reveal ==================*/
/*ScrollReveal({
      reset: false,
      distance: '10px',
      duration: 2000,
      delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .gallery h2', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .box-1', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
*/


/*================== typed js ==================*/
/*
-go to https://github.com/mattboldt/typed.js
-copy this to your html <script src="https://unpkg.com/typed.js@2.0.132/dist/typed.umd.js"></script>
-delete the text in span tag
-add class on span tag to be used in this js file
-do this:
*/
const typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });