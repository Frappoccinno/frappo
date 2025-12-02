const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

// TO DO: Add your authentication logic here
// For demonstration purposes, we'll assume a successful login
if (username === 'Ryan' && password === '010101') {
    window.location.href = 'content.html'; // Replace with your webpage URL 
    } 
    else {
        alert('Invalid username or password');
    }
});