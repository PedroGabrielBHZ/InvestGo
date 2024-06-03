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