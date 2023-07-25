
/*================== toggle icon navbar ==================*/

/*let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-item');

menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
};*/

/*================== Exit navbar on click ==================*/
document.addEventListener("DOMContentLoaded", function () {
    // Get all the navbar links
    const navbarLinks = document.querySelectorAll("#navbarNav a.nav-link");

    // Add a click event listener to each link
    navbarLinks.forEach((link) => {
        link.addEventListener("click", function () {
            // Remove the active class from all links
            navbarLinks.forEach((link) => link.classList.remove("active"));

            // Add the active class to the clicked link
            link.classList.add("active");

            // Check if the navbar is currently expanded
            const navbar = document.querySelector("#navbarNav");
            const isNavbarExpanded = navbar.classList.contains("show");

            // If the navbar is expanded, toggle it to close
            if (isNavbarExpanded) {
                document.querySelector("#burger").click(); // Simulate a click on the burger icon to close the navbar
            }
        });
    });
});


/*================== scroll reveal ==================*/
/*ScrollReveal({
      reset: false,
      distance: '10px',
      duration: 2000,
      delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .projects h2', { origin: 'top' });
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