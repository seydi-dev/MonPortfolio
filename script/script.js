document.addEventListener("DOMContentLoaded", function () {

    const portfolioSection = document.querySelector("#portfolio");

    const arrowRight = portfolioSection.querySelector(".arrow-right");
    const arrowLeft = portfolioSection.querySelector(".arrow-left");

    const portfolioDetails = portfolioSection.querySelectorAll(".portfolio-detail");
    const imgSlide = portfolioSection.querySelector(".img-slide");

    let index = 0;
    const maxIndex = portfolioDetails.length - 1;

    function updateCarousel() {

        // Slide simple et fiable
        imgSlide.style.transform = `translateX(-${index * 100}%)`;

        // Update text panel
        portfolioDetails.forEach(detail => detail.classList.remove("active"));
        portfolioDetails[index].classList.add("active");

        // Disable buttons si nécessaire
        arrowLeft.classList.toggle("disabled", index === 0);
        arrowRight.classList.toggle("disabled", index === maxIndex);
    }

    arrowRight.addEventListener("click", function () {
        if (index < maxIndex) {
            index++;
            updateCarousel();
        }
    });

    arrowLeft.addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    // Init
    updateCarousel();

    // Footer year
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

});