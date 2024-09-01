document.addEventListener("DOMContentLoaded", function() {
    const upArrow = document.getElementById("up-arrow");

    // Show the arrow when scrolled down 100px
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            upArrow.classList.add("show");
        } else {
            upArrow.classList.remove("show");
        }
    });

    // Scroll to the top when the arrow is clicked
    upArrow.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Existing code in your script.js
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    });

    const backToTopLinks = document.querySelectorAll(".back-to-top");

    backToTopLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });
});

