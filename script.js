document.addEventListener("DOMContentLoaded", () => {
    const text = "Hi, I am Santiago Locaso"; // Texto a animar
    const typingTextElement = document.querySelector(".name"); // Elemento objetivo

    let index = 0; // Índice del carácter actual
    let isDeleting = false; // Estado de escritura o borrado

    function typeWriter() {
        if (!isDeleting) {
            // Escribir texto
            typingTextElement.textContent = text.substring(0, index + 1);
            index++;
        } else {
            // Borrar texto, dejando un espacio fijo
            typingTextElement.textContent = text.substring(0, index - 1) + "\u200A"; // Espacio invisible
            index--;
        }

        // Configuración de velocidades
        let speed = isDeleting ? 50 : 100; // Velocidad de borrado más rápida
        if (!isDeleting && index === text.length) {
            speed = 2000; // Pausa cuando el texto está completamente escrito
            isDeleting = true;
        } else if (isDeleting && index === 0) {
            speed = 1000; // Pausa antes de volver a escribir
            isDeleting = false;
        }

        // Llamada recursiva
        setTimeout(typeWriter, speed);
    }

    // Iniciar la animación
    typeWriter();
});