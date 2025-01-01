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

export function initProjects() {
    const container = document.querySelector(".project-container");
    if (!container) return;

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
        container.appendChild(projectCard);
    });
}