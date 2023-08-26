import './App.css';
// import MovieData from './MovieData'
import  { useState, useEffect } from 'react';
import MovieView from './MovieView';
import Header from './Header'
import SingleMovie from './SingleMovie'
import {fetchMovies, fetchSingleMovie, fetchMovieVideo} from './ApiCalls';
import Movies from './Movies'



function App() {

const [selectedMovie, setSelectedMovie] = useState(null)
const [movies, setMovies] = useState([])
const [selectedVideos, setSelectedVideos] = useState([])

useEffect(() => {
  fetchMovies()
  .then(data => setMovies(data.movies))
},[])

function displayMovie(id){
  fetchSingleMovie(id)
  .then(data => setSelectedMovie(data.movie)) 

  fetchMovieVideo(id)
  .then(data => setSelectedVideos(data.videos))
}

function showMovies(){
  setSelectedMovie('')
}




  return (
    <div className="App">
      <Header />
      <div className='body'>
      {!selectedMovie && <Movies movies={movies} displayMovie={displayMovie}/>}
      {selectedMovie && <SingleMovie selectedMovie={selectedMovie} showMovies={showMovies} selectedVideos={selectedVideos} />
      }
      </div>
    </div>
  );
}

export default App;
