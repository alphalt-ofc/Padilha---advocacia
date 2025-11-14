document.addEventListener('DOMContentLoaded', () => {
    const splashSlide = document.getElementById('splash-slide');
    const carouselContainer = document.getElementById('main-carousel');
    
    if (!splashSlide || !carouselContainer) return;

    const splashDuration = 5000; 
    const fadeDuration = 1000; 
    let mySwiper = null;

    function startSwiperCarousel() {
        mySwiper = new Swiper(carouselContainer, {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,       
            speed: 1000,     

            autoplay: {
                delay: 3000,
                disableOnInteraction: false, 
            },
        });
    }

    
    setTimeout(() => {
        splashSlide.classList.add('opacity-0');

        setTimeout(() => {
            splashSlide.style.display = 'none';
            splashSlide.style.zIndex = '-1'; 
        
            startSwiperCarousel();

        }, fadeDuration);
        
    }, splashDuration); 

});