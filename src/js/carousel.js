// src/js/carousel.js

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    if (!carousel) return;

    let slideWidth = carousel.offsetWidth;

    let currentIndex = 0;
    const totalSlides = carousel.children.length;
    const transitionDuration = 700;

    /**
     * Move o carrossel para o índice de slide especificado.
     * @param {number} index O índice do slide para o qual mover.
     */
    function moveToSlide(index) {
        const offset = -index * slideWidth;
        carousel.style.transform = `translateX(${offset}px)`;
        currentIndex = index;
    }

    function appendFirstSlideToTheEnd() {
        const firstSlide = carousel.children[0];
        const clone = firstSlide.cloneNode(true);
        carousel.appendChild(clone);
    }

    appendFirstSlideToTheEnd();

    function nextSlide() {
        if (currentIndex === totalSlides) {
            carousel.style.transition = 'none';
            currentIndex = 0;
            const offset = -currentIndex * slideWidth;
            carousel.style.transform = `translateX(${offset}px)`;

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    carousel.style.transition = `transform ${transitionDuration}ms ease-in-out`;
                    currentIndex = 1;
                    moveToSlide(currentIndex);
                });
            });
        } else {
            moveToSlide(currentIndex + 1);
        }
    }

    setInterval(nextSlide, 3000); 

    window.addEventListener('resize', () => {
        slideWidth = carousel.offsetWidth;
        moveToSlide(currentIndex);
    });
});