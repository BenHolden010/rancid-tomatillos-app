import './SingleMovie.css'
import MovieView from './MovieView'
import PropTypes from 'prop-types';
import {NavLink, useParams} from 'react-router-dom'
import  { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function SingleMovie( {setError, fetchSingleMovie, fetchMovieVideo , movies}){
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [selectedVideo, setSelectedVideo] = useState('0')
    
    let navigate = useNavigate()
    let id = Number(useParams().id)
    function checkMovieID(){
      console.log(movies)
      console.log(movies.find(movie => movie.id ===id))
      if(movies.find(movie => movie.id ===id) === undefined){
        console.log('im an error page')
        return false;
      } else {return true}
    }
    useEffect( ()=> {
    if (checkMovieID()){
        fetchMovieVideo(id)
  .then(data => {
    let trailer = data.videos.find(video => video.type === 'Trailer');
    if(trailer){
    setSelectedVideo(trailer.key)
    }
    else{
      setSelectedVideo('0')
    }
  })
  .catch(error =>  {
    setError(error.message)
    navigate('*')
  })

        fetchSingleMovie(id)
        .then(data=> setSelectedMovie(data.movie))
        .catch(error=> {
          setError(error.message)
          navigate('*')
        })
      } 
      else {
       navigate('*')
      }
    },[])

    if (selectedMovie){
    return (
        <div className='single-movie-view'>
        <MovieView 
        id = {selectedMovie.id}
        title = {selectedMovie.title}
        poster_path = {selectedMovie.poster_path}
        backdrop_path = {selectedMovie.backdrop_path} 
        release_date = {selectedMovie.release_date}
        overview = {selectedMovie.overview} 
        average_rating = {selectedMovie.average_rating} 
        genres = {selectedMovie.genres} 
        budget = {selectedMovie.budget}
        revenue = {selectedMovie.revenue}
        runtime = {selectedMovie.runtime}
        tagline = {selectedMovie.tagline}
        selectedVideo={selectedVideo}
        />
        </div>
    )}
}

export default SingleMovie

SingleMovie.propTypes = {
  selectedMovie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string.isRequired,
        average_rating: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string.isRequired
        ).isRequired,
        overview: PropTypes.string.isRequired,
        revenue: PropTypes.number.isRequired,
        runtime: PropTypes.number.isRequired,
        tagline: PropTypes.string.isRequired,
        budget: PropTypes.number.isRequired,
        }),
}