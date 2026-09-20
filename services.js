document.addEventListener("DOMContentLoaded", function () {

    console.log("TaxView Services page loaded successfully.");

    // Navigation active link
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


    // Service card buttons
    const serviceButtons = document.querySelectorAll(".service-toggle");

    serviceButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card = button.closest(".service-card");

            card.classList.toggle("open");

            if (card.classList.contains("open")) {
                button.textContent = "Hide Services −";
            } else {
                button.textContent = "View Services +";
            }

        });

    });

});