// Import all module functions
import { initNavbar } from './navbar.js';
import { initLanguage } from './language.js';
import { initProjects } from './projects.js';
import { initTechnologies } from './technologies.js';
import { updateFooterYear } from './footer.js';
import { initWriteAnimation } from './writeAnimation.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed'); // Debug log
    initNavbar();
    initLanguage();
    initProjects();
    initTechnologies();
    updateFooterYear();
    initWriteAnimation();
});