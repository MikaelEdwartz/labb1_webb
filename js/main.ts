const generateGenres = () => {
    movies.map((movie) => movie.Genre.split(", ").map((genre) => genres.add(genre)));
}

let showingFavourites: boolean;

const mainContent = document.querySelector("#content");

const genres: Set<string> = new Set<string>();

function showMovies() {
    movies.map((movie) => generateMovieSections(movie))
}

const generateOnStartUp = () => {
    showMovies();
    generateGenres();
    generateGenreDropDown();
    generatefavouriteDropDown()
    const elLoginForm = document.querySelector("#loginForm") as HTMLFormElement;
    if(elLoginForm)
        elLoginForm.addEventListener('submit', (event) =>{
            if(!elLoginForm.checkValidity())
                return;

            event.preventDefault();
            const userName = document.getElementById("userName") as HTMLInputElement;
            const loginButton = document.querySelector(".loginButton") as HTMLButtonElement;
            if(userName && loginButton)
                loginButton.textContent = "Logged in: " + userName.value;
            localStorage.setItem("loggedIn", userName.value);
            closeLoginForm()

        });
    isLoggedIn();
}

const generateGenreDropDown = () => {
    const elDropDown = document.getElementById("genre-dropdown-content");
    if (elDropDown) {
        let listHtml: string = "<a href='#' onclick='showOnlyFromGenre(" + JSON.stringify("Show All") + ")'> Show All </a>";
        genres.forEach((genre) => {
            listHtml += "<a href='#' onclick='showOnlyFromGenre(" + JSON.stringify(genre) + ")'>" + genre + "</a>"
        })
        elDropDown.innerHTML = listHtml
    }

}
const showOnlyFromGenre = (genre: string) => {
    if (mainContent) {
        mainContent.innerHTML = "";
        genre === "Show All" ? showMovies() : movies.filter((movie) => movie.Genre.match(genre)).forEach((movie) => generateMovieSections(movie))
    }
}
const handleSidebar = () => {
    const elSidePanel = document.querySelector("#sidePanel") as HTMLDivElement;
    elSidePanel.style.width = "250px";
}

const closeSidebar = () => {
    const elSidePanel = document.querySelector("#sidePanel") as HTMLDivElement;
    elSidePanel.style.width = "0px";
}


const toggleFavourites = () => {
    if (mainContent) {
        mainContent.innerHTML = "";
        showingFavourites = !showingFavourites;
        showingFavourites ? showFavourites() : hideFavourites();
    }
}
const showFavourites = () => {
    const elToggleFavourite = document.querySelector("#toggleFavourite");
    if (elToggleFavourite) {
        elToggleFavourite.textContent = "Show All"
        movies.filter((mov) => isFavourite(mov.Title))
            .map((movie) => generateMovieSections(movie));
        closeSidebar()
    }
}
const hideFavourites = () => {
    const elToggleFavourite = document.querySelector("#toggleFavourite");
    if (elToggleFavourite) {
        elToggleFavourite.textContent = "Show Favourites"
        closeSidebar();
        showMovies();
    }
}

const generateMovieSections = (movie: movie) => {
    console.log(movie.Title)
    if (mainContent)
        mainContent.innerHTML +=
            `<section class='movieContainer' > 
                    <figure onclick='setMoviePage(${JSON.stringify(movie)})'></a>
                        <img class='poster' src=${movie.Poster} alt="movieposter">
                    </figure>
                    <figure class='favoriteButton' onclick='setFavourite(\"${movie.Title}\")'>
                        <img id='favoriteButton_${movie.Title}' src=${getLikeButtonState(movie.Title)} alt=´movieposter´ >
                    </figure>
                    <article id='movieInfoContainer' onclick='setMoviePage(${JSON.stringify(movie)})'>
                        <p id='title'>${movie.Title} </p>
                        <p id='description'>${movie.Plot}</p>
                        <p id='movieInfoP'> <bold>Writers: </bold> ${movie.Writer}</p>
                        <p id='movieInfoPActor'> <bold>Actors:</bold> ${movie.Actors} </p>
                        <p id='movieInfoP'> <bold>Genre: </bold>${movie.Genre}</p>
                    </article>
                </section>`;
}

const movieRoulette = () => {
    const randomMovieIndex = Math.floor(Math.random() * movies.length)
    setMoviePage(movies[randomMovieIndex])
}

document.addEventListener("DOMContentLoaded", generateMovies);

const getLikeButtonState = (movie: string) => {
    return isFavourite(movie) ? pathToLikedHeart : pathToUnlikedHeart;
}

