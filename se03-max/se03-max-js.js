document.addEventListener('DOMContentLoaded', function () {
    const colorButtons = document.querySelectorAll('.color-button');
    const productImage = document.querySelector('.product-image img');

    colorButtons.forEach(button => {
        button.addEventListener('click', function () {
            const color = this.style.backgroundColor;
            productImage.style.borderColor = color;
        });
    });
});