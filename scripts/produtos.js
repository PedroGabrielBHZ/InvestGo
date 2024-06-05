window.onload = function () {

    // Display all products when the page loads
    displayProducts(products);

    // Filter products when the form is submitted
    var form = document.getElementById('filterForm');
    form.onsubmit = function (e) {
        e.preventDefault();

        // Get the values from the form
        var risk = document.getElementById('risk').value;
        var minimumInvestment = document.getElementById('minimumInvestment').value;
        var maturity = document.getElementById('maturity').value;
        var returnRate = document.getElementById('returnRate').value;

        // Filter the products
        var filteredProducts = products.filter(function (product) {
            return product.risk == risk
                && product.minimumInvestment <= minimumInvestment
                && product.return >= returnRate
                && product.maturity <= maturity;
        });
        displayProducts(filteredProducts);
    };
};

document.getElementById('clearFilters').addEventListener('click', function () {

    // Clear the form
    document.getElementById('filterForm').reset();
    displayProducts(products);
});

/**
 * Displays the list of products in a table format.
 * @param {Array} products - The array of products to be displayed.
 */
function displayProducts(products) {
    var productList = document.getElementById('productList');
    productList.innerHTML = '';

    var table = document.createElement('table');
    table.className = 'table';

    var thead = document.createElement('thead');
    var tr = document.createElement('tr');

    ['Nome', 'Risco', 'Aplicação Mínima', 'Rentabilidade (a.a.)', 'Vencimento', 'Action'].forEach(function (header) {
        var th = document.createElement('th');
        th.textContent = header;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);

    var tbody = document.createElement('tbody');

    products.forEach(function (product) {
        var tr = document.createElement('tr');

        [product.name, product.risk, product.minimumInvestment, product.return, product.maturity].forEach(function (field) {
            var td = document.createElement('td');
            if (field === product.maturity) {
                // Assuming the date is in the format 'yyyy-mm-dd'
                var dateParts = field.split('-');
                var dateObject = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

                // Format the date as 'mm/dd/yyyy'
                td.textContent = dateObject.getDate() + '/' + (dateObject.getMonth() + 1) + '/' + dateObject.getFullYear();
            } else {
                td.textContent = field;
            }
            tr.appendChild(td);
        });

        var td = document.createElement('td');
        var button = document.createElement('button');
        button.className = 'btn btn-success';
        button.textContent = 'Investir';
        td.appendChild(button);
        tr.appendChild(td);

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    productList.appendChild(table);
}

// Available products
var products = [
    {
        name: 'Product 1',
        risk: 'Alto',
        minimumInvestment: 1000,
        return: 10,
        maturity: '2023-12-31',
    },
    {
        name: 'Product 2',
        risk: 'Moderado',
        minimumInvestment: 500,
        return: 5,
        maturity: '2022-12-31',
    },
    {
        name: 'Product 3',
        risk: 'Baixo',
        minimumInvestment: 100,
        return: 2,
        maturity: '2024-12-31',
    }
];