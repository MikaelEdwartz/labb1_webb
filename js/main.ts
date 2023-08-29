interface movies {
    title: string;
    "released": string;
    "genre": string;
    "writer": string;
    "actors": string;
    "plot": string;
    "posterUrl": string;
    "rating": string;
}

const content = document.querySelector("#content");
function showMovies () {
    const movies = generateMovies()
    movies.map((movie) => generateMovieSections(movie))
}

const generateOnStartUp = () => {
    showMovies();
}
const generateMovieSections = (movie: movies) => {
    content.innerHTML = content.innerHTML +
        "<section class='posterContainer'>" +
            "<figure>" +
                "<img class='image' src=\"" + movie.posterUrl + "\" alt=\"movieposter\">" +
            "</figure>" +
            "<article>" +
                "<p id='moviePlot'>" + movie.plot + "</p>" +
            "</article>" +
        "</section>";
}

const generateMovies = () => {
    let movie= {
        "title": "The Shawshank Redemption",
        "released": "14 Oct 1994",
        "genre": "Drama",
        "writer": "Stephen King, Frank Darabont",
        "actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
        "plot": "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
        "rating": "9.3"
    }
    let movie2 = {
        "title": "The Shawshank Redemption",
        "year": "1994",
        "released": "14 Oct 1994",
        "genre": "Drama",
        "writer": "Stephen King, Frank Darabont",
        "actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
        "plot": "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "rating": "9.3"
    }

    let movie3 ={
        "title": "The Shawshank Redemption",
        "year": "1994",
        "released": "14 Oct 1994",
        "genre": "Drama",
        "writer": "Stephen King, Frank Darabont",
        "actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
        "plot": "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        "rating": "9.3"
    }



    let testArray= [];

    testArray.push(movie, movie2, movie3);
    return testArray;
}

document.addEventListener("DOMContentLoaded", generateOnStartUp);
