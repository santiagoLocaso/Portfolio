//WRITE NAME ANIMATION
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

// Datos de tecnologías
const technologies = [
    { name: "HTML", image: "images/html.png" },
    { name: "CSS", image: "images/css.png" },
    { name: "JavaScript", image: "images/javascript.png" },
    { name: "React", image: "images/react.png" },
    { name: "Python", image: "images/python.png" },
    { name: "SQL", image: "images/mysql.png" },
    { name: "Java", image: "images/java.png" },
    { name: "Git", image: "images/git.png" },
    { name: "GitHub", image: "images/github.png" },
];

// Datos de proyectos
const projects = [
    {
        title: { en: "Language school", es: "Escuela de idiomas" },
        description: {
            en: "Collaboratively developed a website for a language school using HTML, CSS, and JavaScript, focusing on modern design and user-friendly navigation.",
            es: "Sitio web desarrollado en equipo para una escuela de idiomas, utilizando HTML, CSS y JavaScript, con enfoque en diseño moderno y navegación intuitiva.",
        },
        image: "images/languageSchool.png",
        link: "https://santiagolocaso.github.io/TPO-CodoACodo/",
    },
    {
        title: { en: "Tech Ecommerce", es: "Ecommerce de Tecnologia" },
        description: {
            en: "Designed and developed an e-commerce platform using React-Vite and Supabase, featuring a robust database to manage products and purchase orders seamlessly.",
            es: "Plataforma de comercio electrónico diseñada y desarrollada utilizando React-Vite y Supabase, con una base de datos robusta para gestionar productos y órdenes de compra de manera eficiente.",
        },
        image: "images/techStore.png",
        link: "https://react-js-1-rho.vercel.app",
    },
    {
        title: { en: "Logoman game", es: "Juego logoman" },
        description: {
            en: "A dynamic and engaging Python game where players must identify the correct logo from a brand displayed on the screen.",
            es: "Un juego dinámico y entretenido desarrollado en Python, donde los jugadores deben identificar el logo correcto de una marca mostrada en pantalla.",
        },
        image: "images/Game.png",
        link: "images/gameplay.gif",
    },
];

// Renderizar tecnologías
const technologiesContainer = document.querySelector(".technologies-container");

technologies.forEach((tech) => {
    const techItem = document.createElement("div");
    techItem.classList.add("tech-item");

    techItem.innerHTML = `
        <img src="${tech.image}" alt="${tech.name}" class="tech-icon" />
        <p class="tech-name" data-en="${tech.name}" data-es="${tech.name}">${tech.name}</p>
    `;

    technologiesContainer.appendChild(techItem);
});

// Renderizar proyectos
const projectsContainer = document.querySelector(".project-container");

projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title.en}" class="project-image" />
        <h2 class="project-title" data-en="${project.title.en}" data-es="${project.title.es}">
            ${project.title.en}
        </h2>
        <p class="project-description" data-en="${project.description.en}" data-es="${project.description.es}">
            ${project.description.en}
        </p>
        ${project.link ? `
        <a href="${project.link}" target="_blank" class="project-link" data-en="View Project" data-es="Ver Proyecto">
            View Project
        </a>` : ''}
    `;

    projectsContainer.appendChild(projectCard);
});

// Botón de cambio de idioma
document.addEventListener("DOMContentLoaded", () => {
    const languageButton = document.getElementById("language-toggle");
    const downloadCVButton = document.getElementById("download-cv-btn");
    const flagEs = document.getElementById("flag-es");
    const flagEn = document.getElementById("flag-en");
    let currentLanguage = "es";

    // Toggle the language and update the CV download link
    languageButton.addEventListener("click", () => {
        currentLanguage = currentLanguage === "en" ? "es" : "en";
        updateLanguage();
    });

    function updateLanguage() {
        // Update text for all elements with data-en and data-es attributes
        document.querySelectorAll("[data-en]").forEach((element) => {
            const content = element.getAttribute(`data-${currentLanguage}`);
            element.textContent = content;
        });

        // Update the download link based on the language
        const cvLink = currentLanguage === "en"
            ? "pdf/CVSantiagoLocasoTuriaci_EN.pdf"
            : "pdf/CVSantiagoLocasoTuriaci_ES.pdf";
        downloadCVButton.setAttribute("href", cvLink);

        // Update the button text
        languageButton.textContent = currentLanguage.toUpperCase();

        // Show the appropriate flag
        if (currentLanguage === "en") {
            flagEs.style.display = "none";
            flagEn.style.display = "block";
        } else {
            flagEs.style.display = "block";
            flagEn.style.display = "none";
        }
    }

    // Initialize the language and CV link
    updateLanguage();
});
