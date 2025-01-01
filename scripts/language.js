// Botón de cambio de idioma
export function initLanguage() {
    const languageButton = document.getElementById("language-toggle");
    const downloadCVButton = document.getElementById("download-cv-btn");
    const flagEs = document.getElementById("flag-es");
    const flagEn = document.getElementById("flag-en");
    let currentLanguage = "es";

    function updateLanguage() {
        document.querySelectorAll("[data-en]").forEach((element) => {
            const content = element.getAttribute(`data-${currentLanguage}`);
            element.textContent = content;
        });

        const cvLink = currentLanguage === "en"
            ? "pdf/CVSantiagoLocasoTuriaci_EN.pdf"
            : "pdf/CVSantiagoLocasoTuriaci_ES.pdf";
        downloadCVButton?.setAttribute("href", cvLink);

        languageButton.textContent = currentLanguage.toUpperCase();

        if (currentLanguage === "en") {
            flagEs.style.display = "none";
            flagEn.style.display = "block";
        } else {
            flagEs.style.display = "block";
            flagEn.style.display = "none";
        }
    }

    languageButton.addEventListener("click", () => {
        currentLanguage = currentLanguage === "en" ? "es" : "en";
        updateLanguage();
    });

    updateLanguage();
}