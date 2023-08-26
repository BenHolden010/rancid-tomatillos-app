import './MovieView.css'

function MovieView({backdrop_path,id,title,release_date,average_rating,showMovies, selectedVideos}){
  console.log("SELECTED VIDEOS: ",selectedVideos)
const randomTrailer = selectedVideos.find(video => video.type === 'Trailer');
console.log("RANDOM TRAILER: ",randomTrailer)
return (
  <div className="selectedMovie">
    <div className='video-container'>
      <video width='750' height='500' controls>
        <source src={`https://www.youtube.com/watch?v=${randomTrailer.key}`} type={"video/mp4"}/>
      </video>
    </div>
    <img className="selectedPoster" src={backdrop_path}/>
    <h3>{title}</h3>
    <p>Movie Rating: {average_rating.toFixed(1)}/10</p>
    <p>Release Date: {release_date}</p>
    <button onClick={() => {showMovies()}}>Back</button>
  </div>
)
}

export default MovieView