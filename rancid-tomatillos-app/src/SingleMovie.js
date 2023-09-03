import './SingleMovie.css'
import MovieView from './MovieView'
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom'
import  { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function SingleMovie( {setError, fetchSingleMovie, fetchMovieVideo, movies}){
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [selectedVideo, setSelectedVideo] = useState('0')
    const navigate = useNavigate();
    let id = Number(useParams().id)

function checkMovieID(){
  if(movies.find(movie => movie.id === id) === undefined){
    return false;
  }
  else{
    return true;
  }
}

useEffect(() => {
  const NAVIGATION_TYPE_RELOAD = window.performance.navigation.TYPE_RELOAD;
  const navigationType = window.performance.navigation.type;
  const isRefreshed = navigationType === NAVIGATION_TYPE_RELOAD;

  if (checkMovieID() || isRefreshed) {
    Promise.all([fetchMovieVideo(id), fetchSingleMovie(id)])
      .then(([videoData, movieData]) => {
        const trailer = videoData.videos.find(video => video.type === 'Trailer');
        setSelectedVideo(trailer ? trailer.key : '0');
        setSelectedMovie(movieData.movie);
      })
      .catch(error => setError(error.message));
  } else {
    setError("Whoops! This page is not found. Please return home :)");
    navigate('*');
  }
}, []);



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