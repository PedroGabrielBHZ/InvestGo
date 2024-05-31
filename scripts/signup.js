document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var cpf = document.getElementById('cpf').value;
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var exists = users.some(function (user) {
        return user.login === login;
    });

    if (exists) {
        alert('Login already exists');
    } else {

        var user = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            telefone: telefone,
            cpf: cpf,
            login: login,
            senha: senha
        };

        users.push(user);

        localStorage.setItem('users', JSON.stringify(users));

        alert('User registered successfully');

        location.href = 'index.html';
    }
});