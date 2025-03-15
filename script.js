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

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let valid = true;
            
            // Limpiar mensajes de error previos
            document.getElementById('nameError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('messageError').textContent = '';
            
            // Validar campo Nombre
            const nameInput = document.getElementById('name');
            if (nameInput.value.trim() === '') {
                document.getElementById('nameError').textContent = 'Por favor, ingresa tu nombre.';
                valid = false;
            }
            
            // Validar campo Email
            const emailInput = document.getElementById('email');
            if (emailInput.value.trim() === '') {
                document.getElementById('emailError').textContent = 'Por favor, ingresa tu email.';
                valid = false;
            } else {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailInput.value.trim())) {
                    document.getElementById('emailError').textContent = 'Por favor, ingresa un email válido.';
                    valid = false;
                }
            }
            
            // Validar campo Mensaje
            const messageInput = document.getElementById('message');
            if (messageInput.value.trim() === '') {
                document.getElementById('messageError').textContent = 'Por favor, ingresa un mensaje.';
                valid = false;
            }
            
            if (valid) {
                const sentMessage = document.getElementById('sentMessage');
                sentMessage.textContent = 'Mensaje enviado.';
                sentMessage.style.display = 'block';
                
                // Reiniciar el formulario
                contactForm.reset();
                
                // Ocultar el mensaje de "enviado" después de 3 segundos
                setTimeout(() => {
                    sentMessage.style.display = 'none';
                }, 3000);
            }
        });
    }
});

