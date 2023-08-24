import logo from './logo.svg';
import './App.css';
import MovieData from './MovieData'
import Movies from './Movies'

function App() {
  return (
    <div className="App">
      <h1>Movies</h1>
      <Movies movies={MovieData}/>
    </div>
  );
}

export default App;
