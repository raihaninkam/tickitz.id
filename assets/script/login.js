// Toggle password visibility
const formGroup = document.querySelector('.eye-pwd');
if (formGroup) {
    const eyePwd = formGroup.querySelector('img');
    const pwdInput = formGroup.querySelector('input[type=password]');

    eyePwd.addEventListener('click', () => {
        if (pwdInput.type === "password") {
            pwdInput.type = "text";
            eyePwd.src = "./assets/img/eye-slash-solid-full.svg";
        } else {
            pwdInput.type = "password";
            eyePwd.src = "./assets/img/eye-solid-full.svg";
        }
    });
}

///////////////////////////////////////////////////////////////////////////////////

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Password validation
function validatePassword(password) {
    const hasMinLength = password.length >= 8;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*/><]/.test(password);
    
    return hasMinLength && hasLowerCase && hasUpperCase && hasSpecialChar;
}

// Form submission handler
const loginForm = document.getElementById('form-login');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Clear previous errors
        hideError();
        
        // Validation checks
        if (!email || !password) {
            return showError('Email dan password tidak boleh kosong');
        }
        
        if (!validateEmail(email)) {
            return showError('Email tidak valid');
        }
        
        if (!validatePassword(password)) {
            return showError('Password harus: minimal 8 karakter, mengandung huruf besar, kecil, dan karakter spesial (!@#$%^&*/><)');
        }
        
        // On successful validation
        console.log('User input:', { email, password });
        
        // Save to localStorage
        localStorage.setItem('userData', JSON.stringify({ email }));
        
        // Redirect to home
        window.location.href = 'home.html';
    });
}

// Error handling functions
function showError(message) {
    const errorElement = document.getElementById('errorMessage');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function hideError() {
    const errorElement = document.getElementById('errorMessage');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', function() {
    const userData = localStorage.getItem('userData');
    if (userData) {
        window.location.href = 'home.html';
    }
});