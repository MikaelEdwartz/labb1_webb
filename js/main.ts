interface movies {
    title: string;
    "released": string;
    "genre": string;
    "writer": string;
    "actors": string;
    "plot": string;
    "posterUrl": string;
    "rating": string;
    "favorite": boolean
}

const generateMovies = () => {
    let movie: movies = {
        "title": "The Shawshank Redemption",
        "released": "14 Oct 1994",
        "genre": "Drama",
        "writer": "Stephen King, Frank Darabont",
        "actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
        "plot": "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
        "rating": "9.3",
        "favorite": false
    }
    let movie2: movies = {
        "title": "Interstellar",
        "released": "07 Nov 2014",
        "genre": "Adventure, Drama, Sci-Fi",
        "writer": "Jonathan Nolan, Christopher Nolan",
        "actors": "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        "plot": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "rating": "8.7",
        "favorite": false
    }

    let movie3: movies = {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "released": "19 Dec 2001",
        "genre": "Action, Adventure, Drama",
        "writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
        "actors": "Elijah Wood, Ian McKellen, Orlando Bloom",
        "plot": "An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it. However, he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir, and his three Hobbit friends Merry, Pippin, and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign.",
        "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        "rating": "8.8",
        "favorite": false
    }

    let movie4: movies = {
        "title": "The Godfather",
        "released": "24 Mar 1972",
        "genre": "Crime, Drama",
        "writer": "Mario Puzo, Francis Ford Coppola",
        "actors": "Marlon Brando, Al Pacino, James Caan",
        "plot": "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
        "posterUrl": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "rating": "9.2",
        "favorite": false
    }
    let movie5: movies = {
        "title": "Forrest Gump",
        "released": "06 Jul 1994",
        "genre": "Drama, Romance",
        "writer": "Winston Groom, Eric Roth",
        "actors": "Tom Hanks, Robin Wright, Gary Sinise",
        "plot": "The history of the United States from the 1950s to the 70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
        "posterUrl": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "rating": "8.8",
        "favorite": false
    }

    let testArray = [];

    testArray.push(movie, movie2, movie3, movie4, movie5);
    return [movie, movie2, movie3, movie4, movie5];
}
const pathToLikedHeart: string = "../img/filledHeart.png";
const pathToUnlikedHeart: string = "../img/hollowHeart.png";

let showingFavourites: boolean;
const mainContent: Element = document.querySelector("#content");
const movies = generateMovies()

function showMovies() {
    movies.map((movie) => console.log(movie))
    movies.map((movie, index) => generateMovieSections(movie))

}

const generateOnStartUp = () => {
    showMovies();
}
const handleSidebar = () => {
    document.getElementById("sidePanel").style.width = "250px";
}
const closeSidebar = () => {
    document.getElementById("sidePanel").style.width = "0px";
}
const setFavourite = (movie: movies) => {

    let m: movies;
    movies.forEach((mov) => {
        if (mov.title === movie.title) {
            mov.favorite = !mov.favorite
            m = mov;
        }
    });

    const doc = document.getElementById("favoriteButton_" + movie.title);
    doc.setAttribute('src', m.favorite ? pathToLikedHeart : pathToUnlikedHeart);
    console.log("MOVIER")
    console.log(movie)
    console.log(movies)

}
const setMoviePage = (movie: movies) => {
    movies.map((m) => console.log(m))
}

const toggleFavourites = () => {
    mainContent.innerHTML = "";
    showingFavourites = !showingFavourites;
    showingFavourites ? showFavourites() : hideFavourites();

}
const showFavourites = () => {
    document.querySelector("#toggleFavourite").textContent = "Show All";
    movies.filter((mov) => mov.favorite === true)
        .map((movie) => generateMovieSections(movie));
    closeSidebar()
}
const hideFavourites = () => {
    document.querySelector("#toggleFavourite").textContent = "Show Favourites";
    closeSidebar();
    showMovies();
}

const generateMovieSections = (movie: movies) => {
    mainContent.innerHTML +=
        "<a >" +
            "<section class='movieContainer' >" +
                "<figure onclick='setMoviePage(" + JSON.stringify(movie) + ")'> " +
                    "<img class='poster' src=\"" + movie.posterUrl + "\" alt=\"movieposter\">" +
                "</figure>" +
                "<figure class='favoriteButton' onclick='setFavourite(" + JSON.stringify(movie) + ")'>" +
                    "<img id='favoriteButton_" + movie.title + "' src=\"" + getLikeButtonState(movie) + "\" alt=\"movieposter\" >" +
                "</figure>" +
                "<article id='movieInfoContainer' onclick='setMoviePage(" + JSON.stringify(movie) + ")'>" +
                    "<p id='movieInfoP'> <bold>Writers: </bold>" + movie.writer + "</p>" +
                    "<p id='movieInfoP'> <bold>Actors:</bold> " + movie.actors + "</p>" +
                    "<p id='movieInfoP'> <bold>Genre: </bold>" + movie.genre + "</p>" +
                    "<p id='description'>" + movie.plot + "</p>" +
                "</article>" +
            "</section>" +
        "</a>";
}


document.addEventListener("DOMContentLoaded", generateOnStartUp);


const getLikeButtonState = (movie: movies) => {
    console.log(movie.title + " is fav: " + movie.favorite)
    let heartState: string;
    movie.favorite ? heartState = pathToLikedHeart : heartState = pathToUnlikedHeart;

    return heartState;
}
