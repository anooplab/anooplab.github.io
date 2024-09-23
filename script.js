
document.addEventListener("DOMContentLoaded", function() {
    const upArrow = document.getElementById("up-arrow");

    // Debounce function to limit the rate at which the scroll event handler is called
    function debounce(func, wait = 10, immediate = true) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Show the arrow when scrolled down 100px
    window.addEventListener("scroll", debounce(() => {
        if (window.scrollY > 100) {
            upArrow.classList.add("show");
        } else {
            upArrow.classList.remove("show");
        }
    }, 20)); // Adjusted debounce timing for performance

    // Scroll to the top when the arrow is clicked with smooth behavior
    upArrow.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling behavior
        });
    });

    // Accessibility enhancement
    upArrow.setAttribute('tabindex', '0');
    upArrow.setAttribute('aria-label', 'Scroll to top');

    // Add keyboard accessibility for the scroll-to-top button
    upArrow.addEventListener("keydown", (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    });
});
