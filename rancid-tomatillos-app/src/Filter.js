import './Filter.css'
import {useState, useEffect} from 'react'

function Filter({sortMovies , filterMovies}){

    const [searchValue, setSearchValue] = useState('')
    const [filterValue, setFilterValue] = useState('none')

    useEffect(() => {
        filterMovies(searchValue, filterValue)
    },[searchValue, filterValue])


    function setSearchMovies(e){
        console.log("SERACH VALUE:",e.target.value)
        setSearchValue(e.target.value)
    }
    
    return (
        <div className='search-filter-form'>
            <div className='filter-container'>
                <p>Filter by Rating: </p>
                <button className='filter-button low' onClick={() => setFilterValue('low')}>Low</button>
                <button className='filter-button med' onClick={() => setFilterValue('med')}>Medium</button>
                <button className='filter-button high' onClick={() => setFilterValue('high')}>High</button>
            </div>
            <input type='text' name='moviesearch' value={searchValue} onChange={setSearchMovies}/>
            <button onClick={() => sortMovies('ascend') }>ASCEND</button>
            <button onClick={() => sortMovies('descend') }>DESCEND</button>
        </div>
    )
}

export default Filter;