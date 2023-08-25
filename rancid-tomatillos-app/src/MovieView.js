import './MovieView.css'

function MovieView({selectedMovie,showMovies}){
return (
  <div>
    <img className="selectedPoster" src={selectedMovie.backdrop_path}/>
    <h3>{selectedMovie.title}</h3>
    <p>Movie Rating: {selectedMovie.average_rating.toFixed(1)}/10</p>
    <p>Release Date: {selectedMovie.release_date}</p>
    <button onClick={() => {showMovies()}}>Back</button>
  </div>
)
}

export default MovieView