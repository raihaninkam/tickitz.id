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
   
});