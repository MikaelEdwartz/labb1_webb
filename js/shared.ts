interface movie {
    "Title": string;
    "Year"?: string;
    "Rated"?: string;
    "Released": string;
    "Runtime"?: string;
    "Genre": string;
    "Director"?: string;
    "Writer": string;
    "Actors": string;
    "Plot": string;
    "Language"?: string;
    "Country"?: string;
    "Awards"?: string;
    "Poster": string;
    "Ratings"?: [
        {
            "Source": string;
            "Value": string
        },
        {
            "Source": string;
            "Value": string;
        },
        {
            "Source": string;
            "Value": string
        }
    ],
    "Metascore"?: string;
    "imdbRating": string;
    "imdbVotes"?: string;
    "imdbID"?: string;
    "Type"?: string;
    "DVD"?: string;
    "BoxOffice"?: string;
    "Production"?: string;
    "Website"?: string;
    "Response"?: string;
}

const pathToLikedHeart: string = "../res/img/filledHeart.png";
const pathToUnlikedHeart: string = "../res/img/hollowHeart.png";
const movies: movie[] = []

const generateMovies = () => {
    const moviesToFetch = ["tt0120737", "tt0111161", "tt0068646", "tt0468569", "tt0050083", "tt0110912", "tt0910970", "tt0102926", "tt0816692", "tt0477348", "tt0088763", "tt0103639", "tt0253474", "tt0110357"]
    Promise.all(
        moviesToFetch.map((movieID) => fetch(`https://www.omdbapi.com/?i=${movieID} &apikey=f485cb5`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(mov => {
                if (mov)
                    movies.push(mov);
            }))
    ).then(() => generateOnStartUp())
}

const setFavourite = (movieTitle: string) => {
    const isNull = !localStorage.getItem("favourites");
    let favourites: string[] = [];
    if (isNull) {
        favourites = []
        favourites.push(movieTitle)
    } else {
        favourites = JSON.parse(localStorage.getItem("favourites")!)
        favourites.indexOf(movieTitle) === -1 ? favourites.push(movieTitle) : favourites.splice(favourites.indexOf(movieTitle), 1)
    }

    localStorage.setItem("favourites", JSON.stringify(favourites));
    const doc = document.getElementById("favoriteButton_" + movieTitle);
    if (doc)
        doc.setAttribute('src', isFavourite(movieTitle) ? pathToLikedHeart : pathToUnlikedHeart);

    updateFavourites(movieTitle)
}

const setFavouriteButtonText = (movieTitle: string) => {
    const doc = document.querySelector("#favButton");
    if (doc)
        doc.textContent = isFavourite(movieTitle) ? "Remove from favourites" : "Add to favourites"
}

const updateFavourites = (movieTitle: string) => {
    setFavouriteButtonText(movieTitle);
    generateFavouriteDropDown()
}
const openSelectedMovie = (movie: movie) => {
    localStorage.setItem("movie", JSON.stringify(movie))
    const newWindow = window.open("../html/Movie.html", "_self")
}
const getSelectedMovie = (movie: string) => {
    let storageMovies = localStorage.getItem("movies");
    if (storageMovies) {
        const movies: movie[] = JSON.parse(storageMovies);
        movies
            .filter((mov) => mov.Title == movie)
            .forEach((selectedMovie) => openSelectedMovie(selectedMovie))
    }

}
const isFavourite = (movie: string) => {
    if (!localStorage.getItem("favourites")) {
        return false
    } else {
        const favourites: string[] = JSON.parse(localStorage.getItem("favourites")!)
        return favourites.indexOf(movie) !== -1
    }
}
const generateFavouriteDropDown = () => {
    const favourite = localStorage.getItem("favourites");
    if (favourite) {
        const favourites: string[] = JSON.parse(favourite)
        const elDropDown = document.getElementById("favourite-dropdown-content");
        if (elDropDown) {
            let listHtml: string = "";
            favourites.forEach((favouriteMovie) => {
                listHtml += "<a href='#' onclick='getSelectedMovie(" + JSON.stringify(favouriteMovie) + ")'>" + favouriteMovie + "</a>"
            })
            elDropDown.innerHTML = listHtml
        }
    }
}
const getCurrentMovie = () => {
    const currentMovie = localStorage.getItem("movie");
    if (currentMovie)
        return JSON.parse(currentMovie).Title;
}

const showLoginForm = () => {
    const elLoginModal = document.querySelector(".modal") as HTMLDivElement;
    if (elLoginModal)
        elLoginModal.style.display = "block";
}
const closeLoginForm = () => {
    const elLoginModal = document.querySelector(".modal") as HTMLDivElement;
    if (elLoginModal)
        elLoginModal.style.display = "none";
}

const isLoggedIn = () => {
    const loginButton = document.querySelector(".loginButton") as HTMLButtonElement;
    const loggedIn = localStorage.getItem("loggedIn");
    if (loginButton && loggedIn)
        loginButton.textContent = "Logged in: " + loggedIn;
}
