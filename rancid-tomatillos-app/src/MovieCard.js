import './MovieCard.css'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function MovieCard({id , title, poster_path, backdrop_path, average_rating, release_date}) {
    let shortenedRating = average_rating.toFixed(1)
    function assignedColor(){
      if(average_rating<5){
        return 'rgba(250, 3, 3, .75)'
      } else if ( average_rating<7){
        return 'rgba(255, 140, 0, .75)'
      } else {
        return 'rgba(47, 255, 0, .75)'
      }
    }
    return (
      <Link className='card--link' to={`/${id}`}>
        <div className="movie-card">
            <div className='movie-poster' style={{backgroundImage: `url(${poster_path})`}}>
                <h3 className='rating-display' style={{backgroundColor: assignedColor()}}>{shortenedRating}</h3>
            </div>
            <h3>{title}</h3>
        </div>
      </Link>
    )
}

export default MovieCard

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
   poster_path: PropTypes.string.isRequired,
   backdrop_path: PropTypes.string.isRequired,
   average_rating: PropTypes.number.isRequired,
   release_date: PropTypes.string.isRequired,
   
}