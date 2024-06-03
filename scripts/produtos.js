var products = [
    {
        name: 'Product 1',
        risk: 'Alto',
        initialInvestment: 1000,
        expirationDate: '2023-12-31',
        return: 10
    },
    {
        name: 'Product 2',
        risk: 'Moderado',
        initialInvestment: 500,
        expirationDate: '2022-12-31',
        return: 5
    },
    {
        name: 'Product 3',
        risk: 'Baixo',
        initialInvestment: 100,
        expirationDate: '2024-12-31',
        return: 2
    },
    {
        name: 'Product 4',
        risk: 'Alto',
        initialInvestment: 2000,
        expirationDate: '2025-12-31',
        return: 15
    },
    {
        name: 'Product 5',
        risk: 'Moderado',
        initialInvestment: 1500,
        expirationDate: '2023-06-30',
        return: 7
    }
];

window.onload = function () {
    displayProducts(products);
    var form = document.getElementById('filterForm');
    form.onsubmit = function (e) {
        e.preventDefault();
        var risk = document.getElementById('risk').value;
        var initialInvestment = document.getElementById('initialInvestment').value;
        var expirationDate = document.getElementById('expirationDate').value;
        var returnRate = document.getElementById('returnRate').value;
        var filteredProducts = products.filter(function (product) {
            return product.risk == risk && product.initialInvestment <= initialInvestment && product.return >= returnRate
                && product.expirationDate <= expirationDate;
        });
        displayProducts(filteredProducts);
    };
};

document.getElementById('clearFilters').addEventListener('click', function () {
    document.getElementById('filterForm').reset();
    displayProducts(products);
});

function displayProducts(products) {
    var productList = document.getElementById('productList');
    productList.innerHTML = '';

    var table = document.createElement('table');
    table.className = 'table';

    var thead = document.createElement('thead');
    var tr = document.createElement('tr');

    ['Nome', 'Risco', 'Aporte Inicial', 'Rendimento (% a.a.)', 'Data de Vencimento', 'Action'].forEach(function (header) {
        var th = document.createElement('th');
        th.textContent = header;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);

    var tbody = document.createElement('tbody');

    products.forEach(function (product) {
        var tr = document.createElement('tr');

        [product.name, product.risk, product.initialInvestment, product.return, product.expirationDate].forEach(function (field) {
            var td = document.createElement('td');
            td.textContent = field;
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