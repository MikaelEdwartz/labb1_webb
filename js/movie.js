"use strict";
const content = document.querySelector(".movieInfo");
const generateMoviePage = () => {
    const localMovie = localStorage.getItem("movie");
    if (localMovie) {
        const selectedMovie = JSON.parse(localMovie);
        if (content)
            content.innerHTML =
                `<section class='movie_movie'>
                <section>
                    <figure>
                        <img class='moviePoster_movie' src=${selectedMovie.posterUrl} alt='Poster Of movie'>
                    </figure>
                </section>
                <section>
                    <article class='movieInfo_movie'>
                        <p class='InfoContainer'> Title: ${selectedMovie.title}</p>
                        <p class='InfoContainer'> Writers: ${selectedMovie.writer}</p>
                        <p class='InfoContainer'> Genre: ${selectedMovie.genre}</p>
                        <p class='InfoContainer'> Rating: ${selectedMovie.rating}</p>
                        <p class='InfoContainer'> Released: ${selectedMovie.released}</p>
                    </article>
                </section>
                <section class='moviePlot_movie'>
                    <article>
                        <p id='plot'>${selectedMovie.plot}</p>
                    </article>
                    <button onclick='setFavourite(\"${selectedMovie.title}\")'> Set Favourite</button>
                </section>
            </section>`;
    }
};
document.addEventListener("DOMContentLoaded", generateMoviePage);
//# sourceMappingURL=movie.js.map