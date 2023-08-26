import './Movies.css'
import MovieCard from './MovieCard'


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
        <div className='movies-containter'>
            {movieCards}
        </div>
    )
}

export default Movies