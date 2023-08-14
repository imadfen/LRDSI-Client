import React from 'react'
import "./SearchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar({search}) {

    const handleChange = (e) => {
        search(e.target.value)
    }

    return (
        <div className='search-bar'>
            <input type="text" placeholder='Rechercher' autoComplete='off' onChange={(e)=>handleChange(e)}/>
            <FontAwesomeIcon className='icon' icon={faSearch} />
        </div>
    )
}

export default SearchBar