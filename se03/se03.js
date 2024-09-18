document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});



// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Product Color Selection
const colorButtons = document.querySelectorAll('.color-button');
const productImage = document.querySelector('.product-image img');

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedColor = button.style.backgroundColor;
        productImage.style.filter = `hue-rotate(${getHueRotateValue(selectedColor)}deg)`;
    });
});

// Function to get the hue-rotate value for different colors (simplified)
function getHueRotateValue(color) {
    switch (color) {
        case 'rgb(66, 66, 66)': return 0;   // Original color
        case 'rgb(37, 37, 37)': return 180; // Darker color
        case 'rgb(255, 255, 255)': return 60;  // Lighter color
        case 'rgb(249, 237, 50)': return 90;  // Yellow
        default: return 0;
    }
}

// Scroll Animation for Flashcards
window.addEventListener('scroll', () => {
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(flashcard => {
        const cardPosition = flashcard.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (cardPosition < screenPosition) {
            flashcard.classList.add('active');
        }
    });
});

// Add the 'active' class for initial load to apply fade-in effects
document.addEventListener('DOMContentLoaded', () => {
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(flashcard => {
        flashcard.classList.add('active');
    });
});


document.querySelectorAll('.color-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const selectedColor = e.target.style.backgroundColor;
        const productImage = document.querySelector('.product-image img');
        
        // Example logic: Change the image based on color (you'll need to have corresponding images)
        if (selectedColor === 'rgb(66, 66, 66)') {
            productImage.src = 'se03-gray.png'; // Replace with your image file names
        } else if (selectedColor === 'rgb(37, 37, 37)') {
            productImage.src = 'se03-black.png'; 
        } else if (selectedColor === 'rgb(255, 255, 255)') {
            productImage.src = 'se03-white.png';
        } else if (selectedColor === 'rgb(249, 237, 50)') {
            productImage.src = 'se03-yellow.png';
        }
    });
});
