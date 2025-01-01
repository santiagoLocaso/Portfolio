export function initWriteAnimation() {
    const text = "Hi, I am Santiago Locaso";
    const typingTextElement = document.querySelector(".name");
    if (!typingTextElement) return;

    let index = 0;
    let isDeleting = false;

    function typeWriter() {
        if (!isDeleting) {
            typingTextElement.textContent = text.substring(0, index + 1);
            index++;
        } else {
            typingTextElement.textContent = text.substring(0, index - 1) + "\u200A";
            index--;
        }

        let speed = isDeleting ? 50 : 100;
        if (!isDeleting && index === text.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && index === 0) {
            speed = 1000;
            isDeleting = false;
        }

        setTimeout(typeWriter, speed);
    }

    typeWriter();
}