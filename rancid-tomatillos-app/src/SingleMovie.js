import './SingleMovie.css'
import MovieView from './MovieView'
import PropTypes from 'prop-types';

function SingleMovie( {selectedMovie, showMovies, selectedVideos}){
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
        showMovies={showMovies}
        />
        </div>
    )
}

export default SingleMovie

SingleMovie.propTypes = {
  selectedMovie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string.isRequired,
        average_rating: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string.isRequired
        ).isRequired,
        overview: PropTypes.string.isRequired,
        revenue: PropTypes.number.isRequired,
        runtime: PropTypes.number.isRequired,
        tagline: PropTypes.string.isRequired,
        budget: PropTypes.number.isRequired,
        }),
        showMovies: PropTypes.func.isRequired,
        selectedVideos: PropTypes.string.isRequired
}