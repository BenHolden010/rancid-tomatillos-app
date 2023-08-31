import './SingleMovie.css'
import MovieView from './MovieView'
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom'
import  { useState, useEffect} from 'react';

function SingleMovie( {setError, fetchSingleMovie, fetchMovieVideo}){
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [selectedVideo, setSelectedVideo] = useState('0')

    let id = useParams().id

    useEffect( ()=> {

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
  .catch(error => setError(error.message))

        fetchSingleMovie(id)
        .then(data=> setSelectedMovie(data.movie))
        .catch(error=> setError(error.message))
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