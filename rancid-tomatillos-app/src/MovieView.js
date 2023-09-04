import './MovieView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

function MovieView({poster_path, backdrop_path, title, genres, overview, runtime, selectedVideo}){
return (
  <div className='selected-movie-container'>
    <Link className='card--link' to={`/`}>
      <button className='back-button'><FontAwesomeIcon icon={faXmark} /></button>
    </Link>
    <div className='video-container'>
        {selectedVideo !== '0' && <iframe allowFullScreen src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} allow='autoplay' frameBorder='0' >
        </iframe>}
        {selectedVideo == '0' && <img src={poster_path}></img>}
    </div> 
    <div className="selectedMovie" style={{backgroundImage: `url(${backdrop_path})`}}>
      <div className='movie-info'>
        <div className='top-info'>
          <h3>{title}</h3>
          <p>{genres.join(', ')}</p>
          <p>{runtime} minutes</p>
        </div>
        <div className='bottom-info'>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  </div>
)
}
      
         

export default MovieView

MovieView.propTypes = {
  id: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
   genres: PropTypes.arrayOf(PropTypes.string.isRequired
   ).isRequired,
   overview: PropTypes.string.isRequired,
   runtime: PropTypes.number.isRequired,
   selectedVideo: PropTypes.string.isRequired
}