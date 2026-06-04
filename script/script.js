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

    /* ============================================================ PORTFOLIO CAROUSEL */
    const slides       = document.getElementById("pfSlides");
    const prevBtn      = document.getElementById("pfPrev");
    const nextBtn      = document.getElementById("pfNext");
    const dotsContainer= document.getElementById("pfDots");
    const pfDetails    = document.querySelectorAll(".pf-detail");

    if (!slides || !prevBtn || !nextBtn) return;

    const total = pfDetails.length;
    let current = 0;

    // Build dots
    const dots = [];
    for (let i = 0; i < total; i++) {
        const dot = document.createElement("button");
        dot.classList.add("pf-dot");
        dot.setAttribute("aria-label", `Projet ${i + 1}`);
        dot.addEventListener("click", () => goTo(i));
        dotsContainer.appendChild(dot);
        dots.push(dot);
    }

    function goTo(index) {
        current = index;

        // Slide
        slides.style.transform = `translateX(-${current * 100}%)`;

        // Text panel
        pfDetails.forEach(d => d.classList.remove("active"));
        pfDetails[current].classList.add("active");

        // Dots
        dots.forEach((d, i) => d.classList.toggle("active", i === current));

        // Arrows
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current === total - 1;
    }

    prevBtn.addEventListener("click", () => { if (current > 0) goTo(current - 1); });
    nextBtn.addEventListener("click", () => { if (current < total - 1) goTo(current + 1); });

    // Keyboard navigation
    document.addEventListener("keydown", e => {
        const pf = document.getElementById("portfolio");
        const rect = pf && pf.getBoundingClientRect();
        const inView = rect && rect.top < window.innerHeight && rect.bottom > 0;
        if (!inView) return;
        if (e.key === "ArrowLeft" && current > 0) goTo(current - 1);
        if (e.key === "ArrowRight" && current < total - 1) goTo(current + 1);
    });

    // Init
    goTo(0);
});