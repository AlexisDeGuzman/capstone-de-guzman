/*================== Exit navbar on click ==================*/
document.addEventListener("DOMContentLoaded", function () {
    // Get all the section elements and header navigation links
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    // Scroll event listener
    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        // Loop over each section element on the page
        sections.forEach((sec) => {
            const sectionTop = sec.offsetTop - 150;
            const sectionHeight = sec.offsetHeight;
            const sectionId = sec.getAttribute("id");

            // Check if the current scroll position is within the section's viewport
            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                // Remove the "active" class from all navigation links
                navLinks.forEach((link) => link.classList.remove("active"));

                // Add the "active" class to the corresponding navigation link
                document.querySelector(`header nav a[href="#${sectionId}"]`).classList.add("active");
            }
        });

        // Check if the navbar is currently expanded
        const navbar = document.querySelector("#navbarNav");
        const isNavbarExpanded = navbar.classList.contains("show");

        // If the navbar is expanded, toggle it to close
        if (isNavbarExpanded) {
            document.querySelector("#burger").click(); // Simulate a click on the burger icon to close the navbar
        }
        
        // STICKY NAVBAR
        const header = document.querySelector("header");
        header.classList.toggle("sticky", currentScroll > 100);
    });

    // Click event listener for footer-iconTop
    const footerIconTop = document.querySelector(".footer-iconTop a");
    footerIconTop.addEventListener("click", function (event) {
        event.preventDefault();

        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


/*================== scroll reveal ==================*/
ScrollReveal({
      reset: true,
      distance: '10px',
      duration: 2000,
      delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .projects h2', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form, .box-1', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



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