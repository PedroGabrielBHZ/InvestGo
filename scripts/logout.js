function logout() {
    localStorage.setItem('activeUser', null);
    window.location.href = 'index.html';
}