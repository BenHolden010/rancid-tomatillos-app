import './App.css';
import  { useState, useEffect } from 'react';
import MovieView from './MovieView';
import Header from './Header'
import SingleMovie from './SingleMovie'
import {fetchMovies, fetchSingleMovie, fetchMovieVideo} from './ApiCalls'
import Movies from './Movies'



function App() {

const [selectedMovie, setSelectedMovie] = useState(null)
const [movies, setMovies] = useState([])
const [selectedVideos, setSelectedVideos] = useState('')
const [errorState, setErrorState] = useState(null)

useEffect(() => {
  fetchMovies()
  .then(data => setMovies(data.movies))
},[])

function displayMovie(id){
  fetchMovieVideo(id)
  .then(data => {
    let trailer = data.videos.find(video => video.type === 'Trailer');
    if(trailer){
    setSelectedVideos(trailer.key)
    }
    else{
      setSelectedVideos('0')
    }
  })
  fetchSingleMovie(id)
  .then(data => setSelectedMovie(data.movie)) 
}

function showMovies(){
  setSelectedMovie('')
}

  return (
    <div className="App">
      {/* {!selectedMovie && <Header />} */}
      <Header />
      <div className='body'>
      {/* {!selectedMovie && <Movies movies={movies} displayMovie={displayMovie}/>} */}
      <Movies movies={movies} displayMovie={displayMovie}/>
      {selectedMovie && (<div className="overlay">
            <SingleMovie selectedMovie={selectedMovie} showMovies={showMovies} selectedVideos={selectedVideos} />
          </div>)}
      </div>
    </div>
  )
}

export default App;
