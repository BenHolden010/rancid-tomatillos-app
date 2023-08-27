import './MovieView.css'

function MovieView({backdrop_path,id,title,release_date,average_rating,showMovies,genres,overview, revenue,runtime,tagline,budget,selectedVideos}){
let revenueEdit = revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD'})
let budgetEdit = budget.toLocaleString('en-US', { style: 'currency', currency: 'USD'})
return (
  <div className="selectedMovie" style={{backgroundImage: `url(${backdrop_path})`}}>
    <button className='back-button' onClick={() => {showMovies()}}>Back</button>
    {/* <div className='tagline-container'>
      <p className="tagline">{tagline}</p>
    </div> */}
    <div className='video-container'>
      <iframe allowFullScreen src={`https://www.youtube.com/embed/${selectedVideos}?autoplay=1`} allow='autoplay' frameBorder='0' >
      </iframe>
    </div>
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
)
}

export default MovieView