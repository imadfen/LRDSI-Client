import React from 'react'
import './ActualitySection.css'
import Actuality from './Actuality'
const { v4: uuidv4 } = require('uuid')

function ActualitySection({actualitiesData}) {
  return (
    <div className='actuality-container'>
        <h1>Actualités</h1>
        <hr />
        {actualitiesData.map(actu =>{
          return(
            <Actuality data={actu} key={uuidv4()}/>
          )
        })}
    </div>
  )
}

export default ActualitySection