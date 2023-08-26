import './SingleMovie.css'
import MovieView from './MovieView'

function SingleMovie( {selectedMovie, showMovies , selectedVideos}){
    return (
        <div className='single-movie-view'>
        <MovieView 
        id = {selectedMovie.id}
        title = {selectedMovie.title}
        poster_path = {selectedMovie.poster_path}
        backdrop_path = {selectedMovie.backdrop_path} 
        release_date = {selectedMovie.release_date}
        overview = {selectedMovie.overview} 
        average_rating = {selectedMovie.average_rating} 
        genres = {selectedMovie.genres} 
        budget = {selectedMovie.budget}
        revenue = {selectedMovie.revenue}
        runtime = {selectedMovie.runtime}
        tagline = {selectedMovie.tagline}
        selectedVideos = {selectedVideos}
        />
        </div>
    )
}

export default SingleMovie