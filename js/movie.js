var content = document.querySelector(".movieInfo");
var generateMoviePage = function () {
    var selectedMovie = JSON.parse(localStorage.getItem("movie"));
    content.innerHTML =
        "<section class='movie_movie'>" +
            "<section>" +
            "<figure>" +
            "<img class='moviePoster_movie' src=\"" + selectedMovie.posterUrl + "\" alt='Poster Of movie'>" +
            "</figure>" +
            "</section>" +
            "<section>" +
            "<article class='movieInfo_movie'>" +
            "<p> Title: " + selectedMovie.title + "</p>" +
            "<p> Writers: " + selectedMovie.writer + "</p>" +
            "<p> Genre: " + selectedMovie.genre + "</p>" +
            "<p> Rating: " + selectedMovie.rating + "</p>" +
            "<p> Released: " + selectedMovie.released + "</p>" +
            "</article>" +
            "</section>" +
            "<section class='moviePlot_movie'>" +
            "<article>" +
            "<p id='plot'>" + selectedMovie.plot + "</p>" +
            "</article>" +
            "</section>" +
            "</section>";
    //content.textContent = JSON.stringify(selectedMovie);
};
document.addEventListener("DOMContentLoaded", generateMoviePage);
//# sourceMappingURL=movie.js.map