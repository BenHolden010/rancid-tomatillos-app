import './MovieCard.css'

function MovieCard({id , title, poster_path, backdrop_path, average_rating, release_date, displayMovie}) {
    let shortenedRating = average_rating.toFixed(1)
    return (
        <div className="movie-card" onClick={() => displayMovie(id)}>
            <h3>{title}</h3>
            <img src={poster_path}></img>
            <p>{shortenedRating}</p>
        </div>
    )
}

export default MovieCard