"use strict";
const content = document.querySelector(".movieInfo");
const generateMoviePage = () => {
    const localMovie = localStorage.getItem("movie");
    if (localMovie) {
        const selectedMovie = JSON.parse(localMovie);
        updateFavourites(selectedMovie.title);
        if (content)
            content.innerHTML =
                `<section class='movie_movie'>
                <section class="moviePoster_movie">
                    <figure>
                        <img class='moviePoster_movie' src=${selectedMovie.posterUrl} alt='Poster Of movie'>
                    </figure>

                </section>
                <section>
                    <article class='movieInfo_movie'>
                        <section>
                        <p class='InfoContainers'> Title: </p>
                        <p class='InfoContainer'>${selectedMovie.title}</p>
                        
                        </section>
                        <section>
                        <p class='InfoContainer'> Writers:</p>
                        <p class='InfoContainer'> ${selectedMovie.writer}</p>

</section>
<section>                        <p class='InfoContainer'> Genre:</p>
                        <p class='InfoContainer'> ${selectedMovie.genre}</p>
</section>
                <section>
                        <p class='InfoContainer'> IMDB rating:</p>
                        <p class='InfoContainer'> ${selectedMovie.rating}</p>
                
</section>
                <section><p class='InfoContainer'> Released:</p>
                        <p class='InfoContainer'> ${selectedMovie.released}</p></section>
                       
                    </article>
                </section>
                <section class='moviePlot_movie'>
                    <article id="plotArticle">
                        <p id='plot'>${selectedMovie.plot}</p>
                    </article>
                </section>
            </section>`;
    }
};
const getFavouriteButtonText = (movieTitle) => {
    return isFavourite(movieTitle) ? "Remove from favourites" : "Add to favourites";
};
document.addEventListener("DOMContentLoaded", generateMoviePage);
//# sourceMappingURL=movie.js.map