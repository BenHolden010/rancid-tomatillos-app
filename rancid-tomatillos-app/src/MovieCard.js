import './MovieCard.css'

function MovieCard({id , title, poster_path, backdrop_path, average_rating, release_date}) {
    return (
        <div className="movie-card">
            <h3>{title}</h3>
            <img url={poster_path}></img>
            <p>{average_rating}</p>
        </div>
    )
}
