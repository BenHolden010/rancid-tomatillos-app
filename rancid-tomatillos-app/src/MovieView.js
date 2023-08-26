import './MovieView.css'

function MovieView({backdrop_path,id,title,release_date,average_rating,showMovies}){
  
return (
  <div className="selectedMovie">
    <img className="selectedPoster" src={backdrop_path}/>
    <h3>{title}</h3>
    <p>Movie Rating: {average_rating.toFixed(1)}/10</p>
    <p>Release Date: {release_date}</p>
    <button onClick={() => {showMovies()}}>Back</button>
  </div>
)
}

export default MovieView