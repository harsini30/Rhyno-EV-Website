document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    const form = document.getElementById('prebook-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Pre-booking is currently unavailable. Please try again later.');
        form.reset();
    });
});