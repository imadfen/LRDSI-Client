import React from 'react'
import "./Banner.css";
import SearchBar from './SearchBar';

function Banner({title, search, noSearch}) {
  return (
    <div className='banner'>
        <h1>{title}</h1>
        {noSearch || <SearchBar search={search}/>}
    </div>
  )
}

export default Banner