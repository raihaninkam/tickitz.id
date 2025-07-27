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


//////////////////////////////////////////////


        const API_KEY = '4e44d9029b1270a757cddc766a1bcb63';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

class MovieApp {
    constructor() {
        this.currentPage = 1;
        this.currentGenre = 'all';
        this.currentSearch = '';
        this.genres = [];
        this.movies = [];
        this.totalPages = 1;
        
        this.init();
    }

    async init() {
        await this.loadGenres();
        await this.loadMovies();
        this.setupEventListeners();
    }

    async loadGenres() {
        try {
            const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
                params: {
                    api_key: API_KEY
                }
            });
            this.genres = response.data.genres;
            this.renderGenreFilters();
        } catch (error) {
            console.error('Error loading genres:', error);
        }
    }

    renderGenreFilters() {
        const container = document.getElementById('genreFilters');
        const allButton = container.querySelector('[data-genre="all"]');
        
        this.genres.forEach(genre => {
            const button = document.createElement('button');
            button.className = 'genre-btn';
            button.setAttribute('data-genre', genre.id);
            button.textContent = genre.name;
            container.appendChild(button);
        });
    }

    async loadMovies() {
        this.showLoading(true);
        
        try {
            let endpoint = '';
            let params = {
                api_key: API_KEY,
                page: this.currentPage
            };

            if (this.currentSearch) {
                endpoint = `${BASE_URL}/search/movie`;
                params.query = this.currentSearch;
            } else if (this.currentGenre !== 'all') {
                endpoint = `${BASE_URL}/discover/movie`;
                params.with_genres = this.currentGenre;
            } else {
                endpoint = `${BASE_URL}/movie/popular`;
            }

            const response = await axios.get(endpoint, { params });
            
            this.movies = response.data.results;
            this.totalPages = Math.min(response.data.total_pages, 500); // TMDb limits to 500 pages
            
            this.renderMovies();
            this.renderPagination();
        } catch (error) {
            console.error('Error loading movies:', error);
            this.showError('Failed to load movies. Please try again.');
        } finally {
            this.showLoading(false);
        }
    }

    renderMovies() {
        const container = document.getElementById('moviesGrid');
        const noResults = document.getElementById('noResults');
        
        if (this.movies.length === 0) {
            container.innerHTML = '';
            noResults.style.display = 'block';
            return;
        }
        
        noResults.style.display = 'none';
        
        container.innerHTML = this.movies.map(movie => {
            const posterUrl = movie.poster_path 
                ? `${IMAGE_BASE_URL}${movie.poster_path}`
                : 'https://via.placeholder.com/500x750/e5e7eb/6b7280?text=No+Image';
            
            const movieGenres = movie.genre_ids
                ? movie.genre_ids.map(id => {
                    const genre = this.genres.find(g => g.id === id);
                    return genre ? genre.name : '';
                  }).filter(name => name).slice(0, 3)
                : [];
            
            return `
                <div class="movie-card">
                    <div class="movie-poster">
                        <img src="${posterUrl}" alt="${movie.title}" loading="lazy">
                        <div class="movie-overlay">
                            <button class="movie-btn btn-details" onclick="movieApp.showMovieDetails(${movie.id})">
                                View Details
                            </button>
                            <button class="movie-btn btn-ticket" onclick="movieApp.buyTicket(${movie.id})">
                                Buy Ticket
                            </button>
                        </div>
                    </div>
                    <div class="movie-info">
                        <h3 class="movie-title">${movie.title}</h3>
                        <div class="movie-genres">
                            ${movieGenres.map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderPagination() {
        const container = document.getElementById('pagination');
        if (this.totalPages <= 1) {
            container.innerHTML = '';
            return;
        }

        const maxVisible = 5;
        const startPage = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
        const endPage = Math.min(this.totalPages, startPage + maxVisible - 1);

        let paginationHTML = '';

        // Previous button
        paginationHTML += `
            <button class="page-btn" onclick="movieApp.goToPage(${this.currentPage - 1})" 
                    ${this.currentPage === 1 ? 'disabled' : ''}>
                ‹
            </button>
        `;

        // Page numbers
        for (let i = startPage; i <= endPage; i++) {
            paginationHTML += `
                <button class="page-btn ${i === this.currentPage ? 'active' : ''}" 
                        onclick="movieApp.goToPage(${i})">
                    ${i}
                </button>
            `;
        }

        // Next button
        paginationHTML += `
            <button class="page-btn" onclick="movieApp.goToPage(${this.currentPage + 1})" 
                    ${this.currentPage === this.totalPages ? 'disabled' : ''}>
                ›
            </button>
        `;

        container.innerHTML = paginationHTML;
    }

    buyTicket(movieId) {
        const movie = this.movies.find(m => m.id === movieId);
        alert(`Redirecting to ticket booking for "${movie.title}"`);
        // window.location.href = `ticket-booking.html?movie=${movieId}`;
    }

    goToPage(page) {
        if (page < 1 || page > this.totalPages || page === this.currentPage) return;
        
        this.currentPage = page;
        this.loadMovies();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        let searchTimeout;
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.currentSearch = e.target.value.trim();
                this.currentPage = 1;
                this.loadMovies();
            }, 500);
        });

        // Genre filtering
        document.getElementById('genreFilters').addEventListener('click', (e) => {
            if (e.target.classList.contains('genre-btn')) {
                document.querySelectorAll('.genre-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                
                this.currentGenre = e.target.getAttribute('data-genre');
                this.currentPage = 1;
                this.currentSearch = '';
                searchInput.value = '';
                this.loadMovies();
            }
        });
    }

    showLoading(show) {
        document.getElementById('loading').style.display = show ? 'flex' : 'none';
        document.getElementById('moviesGrid').style.display = show ? 'none' : 'grid';
    }

    showError(message) {
        const container = document.getElementById('moviesGrid');
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #ef4444;">
                <h3>Error</h3>
                <p>${message}</p>
                <button onclick="movieApp.loadMovies()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--main--color); color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Try Again
                </button>
            </div>
        `;
    }
}

// Initialize the app
const movieApp = new MovieApp();