document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const splashSlide = document.getElementById('splash-slide');
    const container = carousel ? carousel.closest('.carrossel') : null;
    
    if (!carousel || !splashSlide || !container) return;

    let slideWidth = container.offsetWidth; 

    let currentIndex = 0;
    let totalSlides = carousel.children.length; 
    const transitionDuration = 1000;
    const intervalTime = 3000;

    let carouselInterval;

    function moveToSlide(index) {
        const offset = -index * slideWidth;
        carousel.style.transform = `translateX(${offset}px)`;
        currentIndex = index;
    }

    function appendFirstSlideToTheEnd() {
        const firstSlide = carousel.children[0];
        const clone = firstSlide.cloneNode(true);
        carousel.appendChild(clone);
        totalSlides = carousel.children.length; 
    }

    appendFirstSlideToTheEnd();

    function nextSlide() {
        if (currentIndex === totalSlides - 1) { 
            carousel.style.transition = 'none';
            currentIndex = 0;
            const offset = -currentIndex * slideWidth;
            carousel.style.transform = `translateX(${offset}px)`;

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    carousel.style.transition = `transform ${transitionDuration}ms ease-in-out`;
                    moveToSlide(currentIndex + 1);
                });
            });
        } else {
            moveToSlide(currentIndex + 1);
        }
    }
    
    function startCarousel() {
        carouselInterval = setInterval(nextSlide, intervalTime); 
    }
    
    const splashDuration = 5000; 
    const fadeDuration = 1000;  

    setTimeout(() => {
        splashSlide.classList.add('opacity-0');

        setTimeout(() => {
            splashSlide.style.display = 'none';
            splashSlide.style.zIndex = '-1'; 
            
            startCarousel();
        }, fadeDuration); 
        
    }, splashDuration);

    
    window.addEventListener('resize', () => {
        if (carouselInterval) {
            clearInterval(carouselInterval);
        }

        slideWidth = container.offsetWidth; 
        carousel.style.transition = 'none';
        
        moveToSlide(currentIndex);
        
        requestAnimationFrame(() => {
            carousel.style.transition = 'transform 1000ms ease-in-out';
            if (carouselInterval) {
                carouselInterval = setInterval(nextSlide, intervalTime);
            }
        });
    });
});