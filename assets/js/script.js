// Plik: script.js

// Przykładowa animacja przewijania do sekcji
const scrollToSection = function(event) {
    event.preventDefault();
    const sectionId = this.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
};

document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => link.addEventListener('click', scrollToSection));
});

// Przykładowa animacja przewijania do góry strony
const scrollToTop = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const scrollToTopButton = document.querySelector('.scroll-to-top');

if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', scrollToTop);
}
