document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const compareButton = document.getElementById('compare-button');
    const comparisonTableSection = document.getElementById('comparison-table-section');
    const comparisonTable = document.getElementById('comparison-table');

    compareButton.addEventListener('click', function () {
        const selectedProducts = document.querySelectorAll('.compare-checkbox:checked');

        if (selectedProducts.length === 0) {
            alert('Please select at least one model to compare.');
            return;
        }

        // Clear previous table content
        comparisonTable.innerHTML = '';

        // Create table header
        const headerRow = document.createElement('tr');
        const headers = ['Model', 'Price', 'Seats', 'Battery', 'Motor', 'Max Speed'];
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        comparisonTable.appendChild(headerRow);

        // Add selected products to the table
        selectedProducts.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.dataset.model}</td>
                <td>${product.dataset.price}</td>
                <td>${product.dataset.seats}</td>
                <td>${product.dataset.battery}</td>
                <td>${product.dataset.motor}</td>
                <td>${product.dataset.speed}</td>
            `;
            comparisonTable.appendChild(row);
        });

        // Show comparison table section
        comparisonTableSection.classList.remove('hidden');
    });
});