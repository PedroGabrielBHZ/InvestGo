window.onload = function () {

    // Greet the user by name
    var activeUser = JSON.parse(localStorage.getItem('activeUser'));

    if (activeUser && activeUser.nome) {
        document.getElementById('welcomeMessage').textContent = 'Bem vindo, ' + activeUser.nome + '.';
    }

    // Check if the user has filled the investor profile
    var investorCheck = document.getElementById('investorCheck');

    if (activeUser && activeUser.investorProfile === undefined) {
        investorCheck.innerHTML = '\
        Você ainda não preencheu seu perfil de investidor. Faça-o clicando no botão abaixo. \
        <br> \
        <br> \
        <a href="teste_perfil_investidor.html" class="btn btn-primary">Cadastrar</a>';
    } else {
        investorCheck.style.display = 'none';
    }
};

document.getElementById('addFundsForm').addEventListener('submit', function (event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the activeUser object from local storage
    var activeUser = JSON.parse(localStorage.getItem('activeUser'));

    // Get the login field from the activeUser object
    var login = activeUser.login;

    // Get the users array from local storage
    var users = JSON.parse(localStorage.getItem('users'));

    // Find the current user in the users array
    var currentUser = users.find(function (user) {
        return user.login === login;
    });

    // If the current user was found, add the inputted amount to their funds
    if (currentUser) {
        var amount = parseFloat(document.getElementById('amount').value);

        // Check if the "funds" field exists and if not, initialize it to 0
        if (!currentUser.hasOwnProperty('funds')) {
            currentUser.funds = 0;
        }

        currentUser.funds += amount;

        // Save the updated users array back to local storage
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Clear the form
    document.getElementById('addFundsForm').reset();

    // Show the modal
    $('#successModal').modal('show');


});

document.getElementById('okButton').addEventListener('click', function () {
    // hide the modal
    $('#successModal').modal('hide');
});