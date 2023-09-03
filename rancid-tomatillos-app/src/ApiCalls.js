

export function fetchMovies(){
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error("Unable to retrieve movies from server")
        }
})
}

export function fetchSingleMovie(id){
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error("Unable to retrieve movie from server")
        }
})
}

export function fetchMovieVideo(id){
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error("Unable to retrieve video from server")
        }
})
}