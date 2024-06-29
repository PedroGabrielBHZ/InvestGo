document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the active user's investments from local storage
  var activeUser = JSON.parse(localStorage.getItem('activeUser'));
  var investments = activeUser ? activeUser.investments : [];

  // Group investments by name
  var groupedInvestments = investments.reduce(function(acc, investment) {
    if (!acc[investment.name]) {
      acc[investment.name] = { amount: 0, risk: investment.risk, unitPrice: investment.amount };
    }
    acc[investment.name].amount += investment.amount;
    return acc;
  }, {});

  // Get the tbody element where the market position will be inserted
  var marketPositionTbody = document.getElementById('marketPosition');

  // Populate the table with the grouped investments
  Object.keys(groupedInvestments).forEach(function(name) {
    var investment = groupedInvestments[name];
    var tr = document.createElement('tr');

    var tdName = document.createElement('td');
    tdName.textContent = name;
    tr.appendChild(tdName);

    var tdQuantity = document.createElement('td');
    tdQuantity.textContent = '1'; // Assuming 1 as placeholder quantity
    tr.appendChild(tdQuantity);

    var tdUnitPrice = document.createElement('td');
    tdUnitPrice.textContent = investment.unitPrice; // Assuming the unit price is the same as the amount for single investment
    tr.appendChild(tdUnitPrice);

    var tdTotalValue = document.createElement('td');
    tdTotalValue.textContent = investment.amount; // Total value is the same as amount for single investment
    tr.appendChild(tdTotalValue);

    marketPositionTbody.appendChild(tr);
  });
});