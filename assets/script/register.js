const containerLogin = document.querySelector('.pwd-input');
const input = containerLogin.querySelector('input[type=password]');
const eyePwd = containerLogin.querySelector('img');

eyePwd.addEventListener('click', () => {
    if (input.type === 'password') {
        input.type = 'text';
        eyePwd.src = './assets/img/eye-slash-solid-full.svg'
        return;
    }
    input.type = 'password';
    eyePwd.src = './assets/img/eye-solid-full.svg'

})





// Fungsi validasi email

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Fungsi validasi password
function validatePassword(password) {
    // Minimal 8 karakter
    if (password.length < 8) return false;
    // Minimal 1 huruf kecil
    if (!/[a-z]/.test(password)) return false;
    // Minimal 1 huruf besar
    if (!/[A-Z]/.test(password)) return false;
    // Minimal 1 karakter spesial
    if (!/[!@#$%^&*/><]/.test(password)) return false;
    return true;
}


document.getElementById('form-register').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    // Validasi input tidak kosong
    if (!email || !password) {
        showError('Email dan password tidak boleh kosong');
        return;
    }
    
    // Validasi format email
    if (!validateEmail(email)) {
        showError('Email tidak valid');
        return;
    }
    
    // Validasi kekuatan password
    if (!validatePassword(password)) {
        showError('Password harus: minimal 8 karakter, mengandung huruf besar, kecil, dan karakter spesial (!@#$%^&*/><)');
        return;
    }
    
    // Jika validasi berhasil
    console.log('Input user:', { email, password }); // Print ke console
   
});

// Fungsi tampilkan error
// function showError(message) {
//     const errorElement = document.getElementById('errorMessage');
//     errorElement.textContent = message;
//     errorElement.style.display = 'block';
// }