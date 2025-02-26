document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle-courses');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const nextElement = this.nextElementSibling;

            if (nextElement && nextElement.classList.contains('courses-list')) {
                nextElement.style.display = nextElement.style.display === 'none' ? 'block' : 'none';
            }
        });
    });



    // Funcionalidad para la sección de Experiencia
    const experienceToggles = document.querySelectorAll('.toggle-experience');

    experienceToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const details = toggle.querySelector('.experience-details');
            if (details) {
                details.style.display = details.style.display === 'none' ? 'block' : 'none';
            }
        });
    });

    // Funcionalidad de animación para las secciones con clase 'fade-in'
    const sections = document.querySelectorAll('.fade-in');
    const showOnScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', showOnScroll);
    window.addEventListener('load', showOnScroll);
});

