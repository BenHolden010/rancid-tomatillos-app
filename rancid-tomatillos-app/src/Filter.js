import './Filter.css'
import {useState, useEffect} from 'react'
import {faArrowUpWideShort, faArrowDownShortWide} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Filter({sortMovies , filterMovies}){

    const [searchValue, setSearchValue] = useState('')
    const [filterValue, setFilterValue] = useState('none')

    useEffect(() => {
        filterMovies(searchValue, filterValue)
    },[searchValue, filterValue])

    function setSearchMovies(e){
        setSearchValue(e.target.value)
    }

    function assignFilter(e){
        setFilterValue(e.target.value);
    }

    return (
        <div className='search-filter-form'>
            <div className='filter-container'>
                <div className='filter-dropdown'>
                    <label htmlFor="dropdown">Filter by rating:</label>
                    <select id="dropdown" onChange={assignFilter} name='dropdown' value={filterValue} className={`filter-dropdown-selection ${filterValue}`}>
                        <option value="none">None</option> 
                        <option value="low">Low   1-5</option>
                        <option value="med" className='med-option'>Medium   5-7</option>
                        <option value="high">High   7-10</option>
                    </select>
                </div>
            </div>
            <input className='search-input' id='moviessearch' type='text' name='moviesearch' value={searchValue} placeholder='Search by movie title...' onChange={setSearchMovies}/>
            <div className='sort-button-wrapper'>
            <p>Sort by:</p>
            <button onClick={() => sortMovies('ascend') }>Low-High <FontAwesomeIcon icon={faArrowUpWideShort} /></button>
            <button onClick={() => sortMovies('descend') }>High-low <FontAwesomeIcon icon={faArrowDownShortWide} /></button>
            </div>
        </div>
    )
}

export default Filter;