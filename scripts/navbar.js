// Manejo del menú hamburguesa
export function initNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    function toggleMenu(shouldClose = false) {
        const method = shouldClose ? 'remove' : 'toggle';
        hamburger.classList[method]('active');
        navLinks.classList[method]('active');
        document.body.classList[method]('no-scroll');
    }

    hamburger.addEventListener('click', () => toggleMenu());
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(true));
    });
}