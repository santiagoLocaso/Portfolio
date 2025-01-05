// Manejo del menú hamburguesa
// export function initNavbar() {
//     const hamburger = document.querySelector('.hamburger');
//     const navLinks = document.querySelector('.nav-links');

//     function toggleMenu(shouldClose = false) {
//         const method = shouldClose ? 'remove' : 'toggle';
//         hamburger.classList[method]('active');
//         navLinks.classList[method]('active');
//         document.body.classList[method]('no-scroll');
//     }

//     hamburger.addEventListener('click', () => toggleMenu());
//     navLinks.querySelectorAll('a').forEach(link => {
//         link.addEventListener('click', () => toggleMenu(true));
//     });
// }

export function initNavbar() {
    // Obtiene referencias a los elementos del DOM
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Función para alternar el menú
    function toggleMenu(shouldClose = false) {
        const method = shouldClose ? 'remove' : 'toggle';
        hamburger.classList[method]('active');
        navLinks.classList[method]('active');
        document.body.classList[method]('no-scroll');
    }

    // Función para cerrar el menú cuando se hace clic fuera
    function handleClickOutside(event) {
        // Verifica si el clic fue dentro del menú o el botón hamburguesa
        const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);

        // Si el clic fue fuera Y el menú está activo, lo cierra
        if (!isClickInside && navLinks.classList.contains('active')) {
            toggleMenu(true);
        }
    }

    // Configuración de los event listeners
    // 1. Click en el botón hamburguesa
    hamburger.addEventListener('click', () => toggleMenu());

    // 2. Click en los enlaces del menú
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(true));
    });

    // 3. Click en cualquier parte del documento
    document.addEventListener('click', handleClickOutside);
}
