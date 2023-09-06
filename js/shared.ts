
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
        "plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron",
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
    let movie6 = {
        "title": "The Silence of the Lambs",
        "released": "14 Feb 1991",
        "genre": "Crime, Drama, Thriller",
        "writer": "Thomas Harris, Ted Tally",
        "actors": "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney",
        "plot": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "rating": "8.6",
        "favorite": false
    }

    return [movie, movie2, movie3, movie4, movie5, movie6];
}
const movies = generateMovies()
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
    if(doc)
        doc.setAttribute('src', isFavourite(movieTitle) ? pathToLikedHeart : pathToUnlikedHeart);
    setFavouriteButtonText(movieTitle);

}
const setFavouriteButtonText= (movieTitle: string) => {
    const doc = document.querySelector("#favButton");
    if(doc)
        doc.textContent = isFavourite(movieTitle) ? "Remove from favourites" : "Add to favourites"

}
const setMoviePage = (movie: movies) => {

    localStorage.setItem("movie", JSON.stringify(movie))
    const newWindow = window.open("../html/Movie.html" , "_self")
}
const setMoviePages = (movie: string) => {

    movies.filter((mov) => movie === mov.title).map((favouriteMovie) => setMoviePage(favouriteMovie))

}
const isFavourite = (movie: string) => {

    if (!localStorage.getItem("favourites")) {
        return false
    } else {
        const favourites: string[] = JSON.parse(localStorage.getItem("favourites")!)
        return favourites.indexOf(movie) !== -1
    }
}
const generatefavouriteDropDown = () => {
    const favourite = localStorage.getItem("favourites");
    if(favourite){
        const favourites: string[] = JSON.parse(favourite)
        const elDropDown = document.getElementById("favourite-dropdown-content");
        if(elDropDown) {
            let listHtml: string = "";
            favourites.forEach((favouriteMovie) => {
                listHtml += "<a href='#' onclick='setMoviePages(" + JSON.stringify(favouriteMovie) + ")'>" + favouriteMovie + "</a>"
            })
            elDropDown.innerHTML = listHtml
        }}
}
const getCurrentMovie = () =>{

    const currentMovie = localStorage.getItem("movie");
    if(currentMovie)
        return JSON.parse(currentMovie).title;
}