document.addEventListener('DOMContentLoaded', function() {
    const navLinksContainer = document.querySelector('.nav-link');
    const btnSignLog = document.querySelector('.btn-sign-log'); // Ambil referensi ke parent statis

    function toggleMenu() {
        navLinksContainer.classList.toggle('active');
    }

    // Menggunakan event delegation pada elemen statis 'btnSignLog'
    if (btnSignLog) {
        btnSignLog.addEventListener('click', function(e) {
            if (e.target.closest('#hamburger-menu')) { // Memeriksa apakah klik berasal dari hamburger menu atau anaknya
                e.stopPropagation(); 
                toggleMenu();
            }
        });
    }
    
    // Tutup menu saat klik di luar
    document.addEventListener('click', function(e) {
        // hamburgerBtn mungkin sudah tidak ada atau referensinya usang, jadi cek keberadaan #hamburger-menu di DOM
        const currentHamburgerBtn = document.getElementById('hamburger-menu');
        
        if (currentHamburgerBtn && navLinksContainer &&
            !currentHamburgerBtn.contains(e.target) &&
            !navLinksContainer.contains(e.target)) {
            navLinksContainer.classList.remove('active');
        }
    });

    // Authentication state management
    checkAuthState();
    
    function checkAuthState() {
        const userData = localStorage.getItem('userData');
        if (userData) {
            showLoggedInUI();
        } else {
            showLoggedOutUI();
        }
    }
    
    function showLoggedInUI() {
        const btnSignLog = document.querySelector('.btn-sign-log');
        if (btnSignLog) {
            btnSignLog.innerHTML = `
                <div class="user-profile">
                    <img src="./assets/img/raihan.jpg" alt="Profile" class="profile-pic">
                    <div class="dropdown-content">
                        <button id="logoutBtn">Logout</button>
                    </div>
                </div>
                <button id="hamburger-menu">
                    <img src="./assets/img/gg_menu-right-alt.svg" alt="menu icon" class="menu">
                </button>
            `;
            
            const logoutBtn = document.getElementById('logoutBtn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', function() {
                    localStorage.removeItem('userData');
                    window.location.href = 'login.html';
                });
            }
        }
    }
    
    function showLoggedOutUI() {
        const btnSignLog = document.querySelector('.btn-sign-log');
        if (btnSignLog) {
            btnSignLog.innerHTML = `
                <div class="btn-log">
                    <a href="login.html">SignIn</a>
                </div>
                <div class="btn-up">
                    <a href="register.html">Sign Up</a>
                </div>
                <button id="hamburger-menu">
                    <img src="./assets/img/gg_menu-right-alt.svg" alt="menu icon" class="menu">
                </button>
            `;
        }
    }
});