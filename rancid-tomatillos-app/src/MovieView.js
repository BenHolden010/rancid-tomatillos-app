import './MovieView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

function MovieView({backdrop_path,id,title,release_date,average_rating,showMovies,genres,overview, revenue,runtime,tagline,budget,selectedVideo}){
let revenueEdit = revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD'})
let budgetEdit = budget.toLocaleString('en-US', { style: 'currency', currency: 'USD'})
return (
  <div className='selected-movie-container'>
    <Link className='card--link' to={`/`}>
      <button className='back-button'><FontAwesomeIcon icon={faXmark} /></button>
    </Link>
    <div className='video-container'>
        {selectedVideo !== '0' && <iframe allowFullScreen src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} allow='autoplay' frameBorder='0' >
        </iframe>}
    </div> 
    <div className="selectedMovie" style={{backgroundImage: `url(${backdrop_path})`}}>
      {/* <div className='tagline-container'>
        <p className="tagline">{tagline}</p>
      </div> */}
      {/* <div className='video-container'>
        <iframe allowFullScreen src={`https://www.youtube.com/embed/${selectedVideos}?autoplay=1`} allow='autoplay' frameBorder='0' >
        </iframe>
      </div> */}
      <div className='movie-info'>
        <div className='top-info'>
          <h3>{title}</h3>
          <p>{genres.join(', ')}</p>
          <p>{runtime} minutes</p>
        </div>
        <div className='bottom-info'>
          <p>{overview}</p>
          {/* <p>Movie Rating: {average_rating.toFixed(1)}/10</p>
          <p>Release Date: {release_date}</p>
          {revenue ? <p>Budget: {budgetEdit}</p> : <p>Budget: Not available</p>}
          {budget  ? <p>Revenue: {revenueEdit}</p> : <p>Revenue: Not available</p>} */}
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
   selectedVideo: PropTypes.string.isRequired
}