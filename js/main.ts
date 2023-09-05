interface movies {
    "title": string;
    "released": string;
    "genre": string;
    "writer": string;
    "actors": string;
    "plot": string;
    "posterUrl": string;
    "rating": string;
    "favorite": boolean;
}


const pathToLikedHeart: string = "../img/filledHeart.png";
const pathToUnlikedHeart: string = "../img/hollowHeart.png";
const generateGenres= () =>{
    let genres: Set<string> = new Set<string>();
    movies.map((movie) =>  movie.genre.split(", ").map((genre) => genres.add(genre)));
    return genres;
}

let showingFavourites: boolean;

const mainContent = document.querySelector("#content");

const genres = generateGenres()
function showMovies() {
    movies.map((movie, index) => generateMovieSections(movie))
}


const generateOnStartUp = () => {
    showMovies();
   generateGenreDropDown();
   generatefavouriteDropDown()
}
const generateGenreDropDown = () => {
    const elDropDown = document.getElementById("genre-dropdown-content");
    if(elDropDown) {
        let listHtml: string = "<a href='#' onclick='showOnlyFromGenre(" + JSON.stringify("Show All") + ")'> Show All </a>";
        genres.forEach((genre) => {
            listHtml += "<a href='#' onclick='showOnlyFromGenre(" + JSON.stringify(genre) + ")'>" + genre + "</a>"
        })
        elDropDown.innerHTML = listHtml
    }

}
const showOnlyFromGenre = (genre: string) => {
    if(mainContent) {
        mainContent.innerHTML = "";
        genre === "Show All" ? showMovies() : movies.filter((movie) => movie.genre.match(genre)).forEach((movie) => generateMovieSections(movie))
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

const isFavourite = (movie: string) => {

    if (!localStorage.getItem("favourites")) {
        return false
    } else {
        const favourites: string[] = JSON.parse(localStorage.getItem("favourites")!)
        return favourites.indexOf(movie) !== -1
    }
}

const toggleFavourites = () => {
    if(mainContent) {
        mainContent.innerHTML = "";
        showingFavourites = !showingFavourites;
        showingFavourites ? showFavourites() : hideFavourites();
    }
}
const showFavourites = () => {
    const elToggleFavourite = document.querySelector("#toggleFavourite");
    if(elToggleFavourite){
        elToggleFavourite.textContent = "Show All"
    movies.filter((mov) => isFavourite(mov.title))
        .map((movie) => generateMovieSections(movie));
    closeSidebar()}
}
const hideFavourites = () => {
    const elToggleFavourite = document.querySelector("#toggleFavourite");
    if(elToggleFavourite){
        elToggleFavourite.textContent = "Show Favourites"
    closeSidebar();
    showMovies();}
}

const generateMovieSections = (movie: movies) => {
    if(mainContent)
        mainContent.innerHTML +=
                `<section class='movieContainer' > 
                    <figure onclick='setMoviePage(${JSON.stringify(movie)})'></a>
                        <img class='poster' src=${movie.posterUrl} alt="movieposter">
                    </figure>
                    <figure class='favoriteButton' onclick='setFavourite(\"${movie.title}\")'>
                        <img id='favoriteButton_${movie.title}' src=${getLikeButtonState(movie.title)} alt=´movieposter´ >
                    </figure>
                    <article id='movieInfoContainer' onclick='setMoviePage(${JSON.stringify(movie)})'>
                        <p id='title'>${movie.title} </p>
                        <p id='description'>${movie.plot}</p>
                        <p id='movieInfoP'> <bold>Writers: </bold> ${movie.writer }</p>
                        <p id='movieInfoPActor'> <bold>Actors:</bold> ${movie.actors} </p>
                        <p id='movieInfoP'> <bold>Genre: </bold>${movie.genre}</p>
                    </article>
                </section>`;
}

const movieRoulette = () =>{
    const randomMovieIndex = Math.floor(Math.random() * movies.length)
    setMoviePage(movies[randomMovieIndex])
}

document.addEventListener("DOMContentLoaded", generateOnStartUp);


const getLikeButtonState = (movie: string) => {
    return isFavourite(movie) ? pathToLikedHeart : pathToUnlikedHeart;
}
