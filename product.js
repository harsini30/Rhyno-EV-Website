document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    const rentNowButtons = document.querySelectorAll('.rent-now-button');
    rentNowButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('Rental service is currently unavailable. Please check back later.');
        });
    });
});