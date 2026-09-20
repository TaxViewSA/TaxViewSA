/* ========================================
   TAX VIEW - HOME PAGE JAVASCRIPT
======================================== */
document.addEventListener("DOMContentLoaded", function () {
    console.log("Tax View website loaded successfully.");
    /* ========================================
       CURRENT PAGE
       Highlights the correct navigation link
    ======================================== */
    const currentPage = window.location.pathname.split("/").pop();
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
       REVIEW CARDS
       Simple entrance animation
    ======================================== */
    const reviewCards = document.querySelectorAll(".review-card");
    reviewCards.forEach(function (card, index) {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(function () {
            card.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 200 * index);
    });
});