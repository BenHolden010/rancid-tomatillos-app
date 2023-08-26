

export function fetchMovies(){
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .catch(error => alert(error.message))
}

export function fetchSingleMovie(id){
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .catch(error => alert(error.message))
}

export function fetchMovieVideo(id){
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    .then(response => response.json())
    .catch(error => alert(error.message))
}

