document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o Swiper no elemento com ID 'swiper-areas'
    const mySwiper = new Swiper('#swiper-areas', {
        
        // Configurações Padrão (Fallback, normalmente Desktop)
        slidesPerView: 3, 
        spaceBetween: 85, 
        loop: false,
        slidesPerGroup: 1,
        speed: 700,

        // Por padrão, esconde os botões (para mobile)
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // --- Breakpoints RESPONSIVOS ---
        breakpoints: {
            // 0 a 767px (Telas menores/Mobile)
            0: {
                slidesPerView: 1.2, // Mostra 1 card e 20% do próximo (dando a ideia de continuidade)
                spaceBetween: 20,   // Espaço menor entre os cards
                centeredSlides: false, // Inicia no primeiro slide
            },
            
            // 768px a 1023px (Tablets)
            768: {
                slidesPerView: 2, // Mostra 2 cards
                spaceBetween: 40, 
            },

            // 1024px e acima (Desktops)
            1024: {
                slidesPerView: 3, 
                spaceBetween: 85,
            }
        },
    });
});