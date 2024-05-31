document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var user = users.find(function (user) {
        return user.login === login;
    });

    if (user && (senha === user.senha)) {
        localStorage.setItem('activeUser', JSON.stringify(user));
        alert('Login successful');
    } else {
        alert('Invalid login or password');
    }

    location.href = 'index.html';
});