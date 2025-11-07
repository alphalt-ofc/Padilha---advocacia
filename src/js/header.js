document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const closeButton = document.getElementById('menu-close');
    const overlay = document.getElementById('mobile-menu-overlay');
    const body = document.body;
    
    const mobileLinks = document.querySelectorAll('#mobile-nav-list a');
    
    
    function openMenu() {
        overlay.classList.add('is-open');
        body.classList.add('no-scroll'); 
    }

    function closeMenu() {
        overlay.classList.remove('is-open');
        body.classList.remove('no-scroll'); 
    }

    toggleButton.addEventListener('click', openMenu);

    closeButton.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(closeMenu, 300); 
        });
    });
});