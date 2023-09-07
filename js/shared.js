"use strict";
const pathToLikedHeart = "../res/img/filledHeart.png";
const pathToUnlikedHeart = "../res/img/hollowHeart.png";
const generateMovies = () => {
    const moviesToFetch = ["tt0120737", "tt0111161", "tt0068646", "tt0468569", "tt0050083", "tt0110912", "tt0109830", "tt0102926", "tt0816692", "tt0120689", "tt0088763", "tt0245429", "tt0253474", "tt0110357"];
    Promise.all(moviesToFetch.map((movieID) => fetch(`https://www.omdbapi.com/?i=${movieID} &apikey=f485cb5`)
        .then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(mov => {
        if (mov)
            movies.push(mov);
    }))).then(() => generateOnStartUp());
};
const movies = [];
const setFavourite = (movieTitle) => {
    const isNull = !localStorage.getItem("favourites");
    let favourites = [];
    console.log(movieTitle);
    if (isNull) {
        favourites = [];
        favourites.push(movieTitle);
    }
    else {
        favourites = JSON.parse(localStorage.getItem("favourites"));
        favourites.indexOf(movieTitle) === -1 ? favourites.push(movieTitle) : favourites.splice(favourites.indexOf(movieTitle), 1);
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
    const doc = document.getElementById("favoriteButton_" + movieTitle);
    if (doc)
        doc.setAttribute('src', isFavourite(movieTitle) ? pathToLikedHeart : pathToUnlikedHeart);
    updateFavourites(movieTitle);
};
const setFavouriteButtonText = (movieTitle) => {
    const doc = document.querySelector("#favButton");
    if (doc)
        doc.textContent = isFavourite(movieTitle) ? "Remove from favourites" : "Add to favourites";
};
const updateFavourites = (movieTitle) => {
    setFavouriteButtonText(movieTitle);
    generatefavouriteDropDown();
};
const setMoviePage = (movie) => {
    localStorage.setItem("movie", JSON.stringify(movie));
    const newWindow = window.open("../html/Movie.html", "_self");
};
const setMoviePages = (movie) => {
    movies.filter((mov) => movie === mov.Title).map((favouriteMovie) => setMoviePage(favouriteMovie));
};
const isFavourite = (movie) => {
    if (!localStorage.getItem("favourites")) {
        return false;
    }
    else {
        const favourites = JSON.parse(localStorage.getItem("favourites"));
        return favourites.indexOf(movie) !== -1;
    }
};
const generatefavouriteDropDown = () => {
    const favourite = localStorage.getItem("favourites");
    if (favourite) {
        const favourites = JSON.parse(favourite);
        const elDropDown = document.getElementById("favourite-dropdown-content");
        if (elDropDown) {
            let listHtml = "";
            favourites.forEach((favouriteMovie) => {
                listHtml += "<a href='#' onclick='setMoviePages(" + JSON.stringify(favouriteMovie) + ")'>" + favouriteMovie + "</a>";
            });
            elDropDown.innerHTML = listHtml;
        }
    }
};
const getCurrentMovie = () => {
    const currentMovie = localStorage.getItem("movie");
    if (currentMovie)
        return JSON.parse(currentMovie).Title;
};
const showLoginForm = () => {
    const elLoginModal = document.querySelector(".modal");
    if (elLoginModal)
        elLoginModal.style.display = "block";
};
const closeLoginForm = () => {
    const elLoginModal = document.querySelector(".modal");
    if (elLoginModal)
        elLoginModal.style.display = "none";
};
const isLoggedIn = () => {
    const loginButton = document.querySelector(".loginButton");
    const loggedIn = localStorage.getItem("loggedIn");
    if (loginButton && loggedIn)
        loginButton.textContent = "Logged in: " + loggedIn;
};
//# sourceMappingURL=shared.js.map