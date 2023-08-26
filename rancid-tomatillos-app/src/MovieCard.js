import './MovieCard.css'

function MovieCard({id , title, poster_path, backdrop_path, average_rating, release_date, displayMovie}) {
    let shortenedRating = average_rating.toFixed(1)
    function assignedColor(){
      if(average_rating<5){
        return 'rgba(250, 3, 3, .65)'
      } else if ( average_rating<7){
        return 'rgba(255, 140, 0, .65)'
      } else {
        return 'rgba(47, 255, 0, .65)'
      }
    }
    return (
        <div className="movie-card" onClick={() => displayMovie(id)}>
            <div className='movie-poster' style={{backgroundImage: `url(${poster_path})`}}>
                <h3 className='rating-display' style={{backgroundColor: assignedColor()}}>{shortenedRating}</h3>
            </div>
            <h3>{title}</h3>
        </div>
    )
}

export default MovieCard