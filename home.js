document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    

    // Initialize the first image slide
    showImageSlide(imageIndex);

    // Add event listeners to image dots
    imageDots.forEach((dot, i) => {
        dot.addEventListener('click', () => currentImageSlide(i));
    });

    // Carousel functionality for USP section
    let uspIndex = 0;
    const uspSlides = document.querySelectorAll('.usp-slide');
    const uspDots = document.querySelectorAll('.usp-dots .dot');

    function showUSPSlide(index) {
        uspSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            uspDots[i].classList.toggle('active', i === index);
        });
    }

    function currentUSPSlide(index) {
        uspIndex = index;
        showUSPSlide(index);
    }

    // Initialize the first USP slide
    showUSPSlide(uspIndex);

    // Add event listeners to USP dots
    uspDots.forEach((dot, i) => {
        dot.addEventListener('click', () => currentUSPSlide(i));
    });

    // Dynamic Tagline Functionality
    const words = ['Elegance', 'Minimalism', 'Comfort'];
    let wordIndex = 0;
    const dynamicWord = document.getElementById('dynamic-word');

    function changeWord() {
        wordIndex = (wordIndex + 1) % words.length;
        dynamicWord.textContent = words[wordIndex];
    }

    setInterval(changeWord, 3000); // Change word every 3 seconds
});
