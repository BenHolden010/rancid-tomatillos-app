import './Movies.css'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types'


function Movies({movies, displayMovie}) {
        const movieCards = movies.map(movie => {
        return (
            <MovieCard
            id={movie.id}
            poster_path={movie.poster_path}
            backdrop_path={movie.backdrop_path}
            title={movie.title}
            average_rating={movie.average_rating}
            release_date={movie.release_date}
            key={movie.id}
            displayMovie={displayMovie}
            />
        )
    })

    return (
        <div className='movies-container'>
            {movieCards}
        </div>
    )
}

export default Movies

Movies.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            average_rating: PropTypes.number.isRequired,
            poster_path: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
          })
    ),
     displayMovie: PropTypes.func.isRequired
  }