document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o Swiper no elemento com ID 'swiper-areas'
    const mySwiper = new Swiper('#swiper-areas', {
        
        // Configuração para exibir 3 slides por vez
        slidesPerView: 3, 
        
        // O Espaçamento entre os slides (replicando o justify-between)
        spaceBetween: 85, // 170px de espaço total / 2 lacunas = 85px
        
        // Opcional: Desabilita a rolagem infinita
        loop: false,
        
        // Garante que o carrossel pare na próxima página completa
        slidesPerGroup: 1,
        
        // Transição suave
        speed: 700,

        // Adiciona as setas de navegação
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Se houver mais de 6 slides, você pode limitar o número de transições:
        // Por exemplo, 2 grupos de 3, apenas 1 transição total.
        // Se você tiver 6 slides, o Swiper já faz isso automaticamente com slidesPerGroup: 3
    });
});