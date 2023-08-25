import logo from './logo.svg';
import './App.css';
import MovieData from './MovieData'
import Movies from './Movies'
import  { useState, useEffect } from 'react';
import MovieView from './MovieView';



function App() {

const [selectedMovie, setSelectedMovie] = useState(null)

function displayMovie(id){ 
  return setSelectedMovie(MovieData.movies.find(movie=>movie.id===id))
}

  return (
    <div className="App">
      <h1>Movies</h1>
      {!selectedMovie && <Movies movies={MovieData} displayMovie={displayMovie}/>}
      {selectedMovie && <MovieView selectedMovie={selectedMovie}/>
      }
    </div>
  );
}

export default App;
