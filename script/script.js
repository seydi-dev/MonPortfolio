document.addEventListener("DOMContentLoaded", function () {

    /* ============================================================ FOOTER YEAR */
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ============================================================ NAVBAR BURGER */
    const burger = document.getElementById("navBurger");
    const navLinks = document.getElementById("navLinks");

    if (burger && navLinks) {
        burger.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });

        // Close nav when a link is clicked (mobile)
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
            });
        });
    }

    /* ============================================================ ACTIVE NAV LINK ON SCROLL */
    const sections = document.querySelectorAll("section[id]");
    const navAnchors = document.querySelectorAll(".nav-links a");

    function updateActiveNav() {
        let current = "";
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top <= 90) current = section.getAttribute("id");
        });
        navAnchors.forEach(a => {
            a.classList.toggle("active", a.getAttribute("href") === "#" + current);
        });
    }

    window.addEventListener("scroll", updateActiveNav, { passive: true });
    updateActiveNav();

    /* ============================================================ BACK TO TOP */
    const toTop = document.getElementById("toTop");
    if (toTop) {
        window.addEventListener("scroll", () => {
            toTop.classList.toggle("visible", window.scrollY > 400);
        }, { passive: true });
    }
});