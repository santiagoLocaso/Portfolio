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

export function initTechnologies() {
    const container = document.querySelector(".technologies-container");
    if (!container) return;

    technologies.forEach((tech) => {
        const techItem = document.createElement("div");
        techItem.classList.add("tech-item");
        techItem.innerHTML = `
            <img src="${tech.image}" alt="${tech.name}" class="tech-icon" />
            <p class="tech-name" data-en="${tech.name}" data-es="${tech.name}">${tech.name}</p>
        `;
        container.appendChild(techItem);
    });
}