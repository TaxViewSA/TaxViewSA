/* ========================================
   TAXVIEW - ABOUT PAGE JAVASCRIPT
======================================== */
document.addEventListener("DOMContentLoaded", function () {
    console.log("TaxView About page loaded successfully.");
    /* ========================================
       ACTIVE NAVIGATION
    ======================================== */
    const currentPage = window.location.pathname
        .split("/")
        .pop();
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(function (link) {
        const linkPage = link.getAttribute("href");
        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {
            link.classList.add("active");
        }
    });
    /* ========================================
       SCROLL REVEAL
       
       IMPORTANT:
       Content stays visible by default.
       JavaScript only adds an animation
       when the user scrolls.
    ======================================== */
    const animatedItems = document.querySelectorAll(
        ".info-card, .approach-item, .value-card, .why-item, .client-item"
    );
    const revealOnScroll = function () {
        const windowHeight = window.innerHeight;
        animatedItems.forEach(function (item) {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight - 50) {
                item.classList.add("visible");
            }
        });
    };
    /*
        Run once when the page loads.
    */
    revealOnScroll();
    /*
        Run when the user scrolls.
    */
    window.addEventListener("scroll", revealOnScroll);
    /* ========================================
       NAVIGATION
    ======================================== */
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (otherLink) {
                otherLink.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});