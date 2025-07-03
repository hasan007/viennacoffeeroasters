document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const response = document.getElementById('formResponse');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            response.textContent = 'Thank you for reaching out! We will get back to you soon.';
            response.classList.remove('hidden');
            form.reset();
        });
    }
});
