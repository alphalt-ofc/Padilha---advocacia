document.addEventListener('DOMContentLoaded', () => {
    const mySwiper = new Swiper('#swiper-areas', {
        
        slidesPerView: 3, 
        spaceBetween: 85, 
        loop: false,
        slidesPerGroup: 1,
        speed: 700,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        breakpoints: {
            0: {
                slidesPerView: 1.2, 
                spaceBetween: 20,  
                centeredSlides: false, 
            },
            
            768: {
                slidesPerView: 2,
                spaceBetween: 40, 
            },

            1024: {
                slidesPerView: 3, 
                spaceBetween: 85,
            }
        },
    });
});