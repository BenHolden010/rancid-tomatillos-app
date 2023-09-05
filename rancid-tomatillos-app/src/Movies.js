import './Movies.css'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types'
import Filter from './Filter'
import {useState, useEffect} from 'react'


function Movies({movies}) {
    const [filteredMovies, setFilteredMovies] = useState([])
    
    useEffect(() => {
        setFilteredMovies([...movies])
    }, [movies])
    
    function sortMovies(direction) {
        let sortedMovies = [...filteredMovies];
        if(direction === 'ascend'){
            sortedMovies.sort((amovie,bmovie) => amovie.average_rating - bmovie.average_rating)
            
        }
        else{
            sortedMovies.sort((amovie,bmovie) => bmovie.average_rating - amovie.average_rating)
            
        }
        setFilteredMovies(sortedMovies)
    }

    function filterMovies(searchValue, filterValue){
        const ratings ={
            low : [0,5],
            med : [5,7],
            high : [7,11],
            none : [0,11]
        }
        const newMovies = movies.filter(movie =>{
            const splitTitle = (movie.title.split(' '))
            const searchInTitle = splitTitle.find(title => title.toLowerCase().startsWith(searchValue.toLowerCase()))
            const ratingMatches = movie.average_rating >= ratings[filterValue][0] && movie.average_rating < ratings[filterValue][1];
            
            return searchInTitle && ratingMatches ? true : false;
        })
        setFilteredMovies(newMovies) 
    }
    
    let movieCards = filteredMovies.map(movie => {
        return (
            <MovieCard
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            average_rating={movie.average_rating}
            key={movie.id}
            />
        )
    })

    return (
        <>
            <Filter className='filter-sort-form' sortMovies={sortMovies} filterMovies={filterMovies}/>
            {filteredMovies.length === 0 && <div className='no-movies-container'><p>No movies match the search criteria. Please try another search.</p>
                </div>}
            {filteredMovies && <div className='movies-container'>
                {movieCards}
            </div>}
        </>
    )
}

export default Movies

Movies.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            average_rating: PropTypes.number.isRequired,
            poster_path: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
          })
    ),
}