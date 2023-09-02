import './App.css';
import  { useState, useEffect } from 'react';
import MovieView from './MovieView';
import Header from './Header'
import Error from './Error'
import SingleMovie from './SingleMovie'
import {fetchMovies, fetchSingleMovie, fetchMovieVideo} from './ApiCalls'
import Movies from './Movies'
import { Routes, Route } from 'react-router-dom';



function App() {

const [selectedMovie, setSelectedMovie] = useState(null)
const [movies, setMovies] = useState([])
const [selectedVideos, setSelectedVideos] = useState('')
const [error, setError] = useState('')

useEffect(() => {
  fetchMovies()
  .then(data => setMovies(data.movies))
  .catch(error => setError(error.message))
},[])

// function displayMovie(id){
//   fetchMovieVideo(id)
//   .then(data => {
//     let trailer = data.videos.find(video => video.type === 'Trailer');
//     if(trailer){
//     setSelectedVideos(trailer.key)
//     }
//     else{
//       setSelectedVideos('0')
//     }
//   })
//   .catch(error => setError(error.message))
//   fetchSingleMovie(id)
//   .then(data => setSelectedMovie(data.movie))
//   .catch(error => setError(error.message))
// }

// console.log("MOVIES PROP :", movies);
// function showMovies(){
//   setSelectedMovie('')
// }

  return (
    <div className="App">
      <div className='body'>
      <Routes>
      <Route path="/" element={
        <>
        <Header />
        {!movies.length ? <p>Please Wait While Movies Load.</p> :
        <Movies movies={movies}/>}
       </>}/>
      <Route path="/:id" element={<SingleMovie setError={setError} movies={movies}
       fetchMovieVideo={fetchMovieVideo} fetchSingleMovie={fetchSingleMovie}/>}/>
      <Route path="*" element={<Error setError={setError} error={error}/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App;
