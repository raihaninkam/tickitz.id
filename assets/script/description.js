const backdropEl = document.querySelector("section#hero #mov-bdrop");
const detailSection = document.querySelector("section#mov-detail");

const wrapperDetail = detailSection.querySelector(".detail-wrapper");
const wrapperSynopsis = detailSection.querySelector(".synopsis-wrapper");

fetchMovieDetail(13);

async function fetchMovieDetail(movieId) {
    const config = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjlhYWJkYWEyMTYyOWRlOTM0YjI1NjFhYjI2ODBmZCIsIm5iZiI6MTc1MzUzMDgzOS42NjQsInN1YiI6IjY4ODRjMWQ3ZTIwYTNlOGRhYmY3ODU2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YsOcW4dK8ZVpcGKIXE8LSoxWMA8By9zrj6-PuMMQPzw'
        }
    };

    try {
        const response = await axios.request(config);
        const { title, overview, genres, release_date, runtime, poster_path, backdrop_path } = response.data;

        // Update background
        backdropEl.style.cssText = `
            background: linear-gradient(rgba(0,0,0,0.4)), url(https://image.tmdb.org/t/p/w500${backdrop_path});
            background-size: cover;
            background-position-y: 15%;
        `;

        // Poster
        const posterEl = document.createElement("img");
        posterEl.src = `https://image.tmdb.org/t/p/w500${poster_path}`;
        posterEl.width = 192;

        // Right detail section
        const infoBox = document.createElement("div");
        infoBox.className = "right-items";

        const titleEl = document.createElement("h2");
        titleEl.textContent = title;

        const genreBox = document.createElement("div");
        genreBox.className = "genre d-flex";
        genres.forEach(g => {
            const gEl = document.createElement("p");
            gEl.textContent = g.name;
            genreBox.appendChild(gEl);
        });

        const gridBox = document.createElement("div");
        gridBox.className = "grid-child";
        gridBox.append(
            createGridItem("Release Date", release_date),
            createGridItem("Duration", `${Math.floor(runtime / 60)} hours ${runtime % 60} minutes`)
        );

        infoBox.append(titleEl, genreBox, gridBox);

        // Overview
        const synopsisEl = document.createElement("p");
        synopsisEl.textContent = overview;

        wrapperDetail.append(posterEl, infoBox);
        wrapperSynopsis.appendChild(synopsisEl);

        detailSection.append(wrapperDetail, wrapperSynopsis);

    } catch (error) {
        console.error("Failed to fetch movie details:", error);
    }
}

function createGridItem(label, value) {
    const container = document.createElement("div");

    const title = document.createElement("h4");
    title.textContent = label;

    const val = document.createElement("p");
    val.textContent = value;

    container.append(title, val);
    return container;
}
