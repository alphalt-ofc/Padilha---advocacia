// src/js/carousel.js

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const splashSlide = document.getElementById('splash-slide');
    const container = carousel ? carousel.closest('.carrossel') : null; // Pega o contêiner para calcular a largura
    
    if (!carousel || !splashSlide || !container) return;

    // A largura do slide deve vir do contêiner visível, não do #carousel
    let slideWidth = container.offsetWidth; 

    let currentIndex = 0;
    // totalSlides é o número de slides reais + 1 clonado no final
    let totalSlides = carousel.children.length; 
    const transitionDuration = 1000;
    const intervalTime = 3000; // Intervalo de troca do carrossel

    let carouselInterval; // Variável para controlar o setInterval

    function moveToSlide(index) {
        // Lógica de loop circular original
        const offset = -index * slideWidth;
        carousel.style.transform = `translateX(${offset}px)`;
        currentIndex = index;
    }

    function appendFirstSlideToTheEnd() {
        const firstSlide = carousel.children[0];
        const clone = firstSlide.cloneNode(true);
        carousel.appendChild(clone);
        // Atualiza a contagem de slides após a clonagem
        totalSlides = carousel.children.length; 
    }

    // A função de clonagem deve ser executada para a lógica de loop funcionar
    appendFirstSlideToTheEnd();

    function nextSlide() {
        if (currentIndex === totalSlides - 1) { // Verifica o índice do slide clonado
            // 1. Salta para o slide 0 sem transição
            carousel.style.transition = 'none';
            currentIndex = 0;
            const offset = -currentIndex * slideWidth;
            carousel.style.transform = `translateX(${offset}px)`;

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    // 2. Continua a transição para o slide 1 com animação
                    carousel.style.transition = `transform ${transitionDuration}ms ease-in-out`;
                    moveToSlide(currentIndex + 1);
                });
            });
        } else {
            // Move para o próximo slide com animação
            moveToSlide(currentIndex + 1);
        }
    }
    
    function startCarousel() {
        // Garante que a transição esteja ativa no CSS, então apenas iniciamos o loop
        carouselInterval = setInterval(nextSlide, intervalTime); 
    }
    
    // --- Implementação do Splash Screen e Fade Out ---
    
    const splashDuration = 5000; // 5 segundos de exibição
    const fadeDuration = 1000;  // 1 segundo para o fade out (igual ao CSS)

    setTimeout(() => {
        // 1. Inicia o Fade Out: Adiciona a classe que leva a opacidade para 0 (Tailwind)
        splashSlide.classList.add('opacity-0');

        // 2. Espera a animação de Fade Out terminar (1 segundo)
        setTimeout(() => {
            // Remove o slide da tela e inicia o carrossel
            splashSlide.style.display = 'none';
            splashSlide.style.zIndex = '-1'; 
            
            // 3. Inicia o Carrossel
            startCarousel();

        }, fadeDuration); 
        
    }, splashDuration); // Tempo total de espera antes do fade out

    // --- Lógica de Redimensionamento ---
    
    window.addEventListener('resize', () => {
        // Limpa o intervalo se o carrossel estiver rodando
        if (carouselInterval) {
            clearInterval(carouselInterval);
        }

        // Recalcula a largura do slide
        slideWidth = container.offsetWidth; 
        
        // Desativa a transição do carrossel para reposicionamento
        carousel.style.transition = 'none';
        
        // Reposiciona o slide atual
        moveToSlide(currentIndex);
        
        // Reativa a transição e o intervalo
        requestAnimationFrame(() => {
            carousel.style.transition = 'transform 1000ms ease-in-out';
            if (carouselInterval) {
                // Reinicia o intervalo de troca automática
                carouselInterval = setInterval(nextSlide, intervalTime);
            }
        });
    });
});