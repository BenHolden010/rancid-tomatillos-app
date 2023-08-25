import './MovieView.css'

function MovieView({selectedMovie}){
return (
  <div>
    <img className="selectedPoster" src={selectedMovie.backdrop_path}/>
    <h3>{selectedMovie.title}</h3>
    <p>Movie Rating: {selectedMovie.average_rating.toFixed(1)}/10</p>
    <p>Release Date: {selectedMovie.release_date}</p>
  </div>
)
}

export default MovieView