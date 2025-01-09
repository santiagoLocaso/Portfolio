export function initWriteAnimation() {
    const textEs = "Hola, soy Santiago Locaso";
    const textEn = "Hi, I am Santiago Locaso";
    const typingTextElement = document.querySelector(".name");
    if (!typingTextElement) return;

    let index = 0;
    let isDeleting = false;
    let currentLanguage = "es"; // Comienza con español
    let text = textEs; // Empezamos con el texto en español

    function typeWriter() {
        // Definir el texto según el idioma actual
        if (currentLanguage === "en") {
            text = textEn;
        } else {
            text = textEs;
        }

        // Lógica de la animación de escritura
        if (!isDeleting) {
            typingTextElement.textContent = text.substring(0, index + 1);
            index++;
        } else {
            typingTextElement.textContent = text.substring(0, index - 1) + "\u200A";
            index--;
        }

        let speed = isDeleting ? 50 : 100;
        if (!isDeleting && index === text.length) {
            speed = 2000;  // Esperar antes de borrar
            isDeleting = true;
        } else if (isDeleting && index === 0) {
            speed = 1000;  // Esperar antes de cambiar de idioma
            isDeleting = false;
            // Cambiar el idioma al final de una animación
            currentLanguage = currentLanguage === "en" ? "es" : "en";
        }

        setTimeout(typeWriter, speed);
    }

    typeWriter();
}
