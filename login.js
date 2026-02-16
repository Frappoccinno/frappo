// ===== NAVBAR FUNCTIONALITY =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// ===== FORM SWITCHING FUNCTIONALITY =====
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const switchForms = document.querySelectorAll('.switch-form');

// Hide signup form initially
if (signupForm) {
    signupForm.style.display = 'none';
}

// Switch between forms
switchForms.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetForm = e.target.getAttribute('href').substring(1);
        
        if (targetForm === 'signup') {
            // Show signup, hide login
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
            loginForm.classList.remove('active');
            signupForm.classList.add('active');
        } else if (targetForm === 'login') {
            // Show login, hide signup
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
            signupForm.classList.remove('active');
            loginForm.classList.add('active');
        }
    });
});

// ===== PASSWORD VISIBILITY TOGGLE =====
const togglePasswordBtns = document.querySelectorAll('.toggle-password');

togglePasswordBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const inputId = btn.getAttribute('data-input');
        const inputField = document.getElementById(inputId);
        const icon = btn.querySelector('i');
        
        if (inputField.type === 'password') {
            inputField.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            inputField.type = 'password';
            icon.classList.add('fa-eye');
            icon.classList.remove('fa-eye-slash');
        }
    });
});