import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import './Communication.css'


function Communication({comm}) {
    const title = comm.title
    const conference = comm.conference
    const authors = comm.authors
    const date = comm.date
    const url = comm.url


    return (
        <div className='communication'>
            <div>
                <p className='communication-author'>&nbsp;&nbsp;{authors}</p>
                <h3 className='communication-title'>{title}</h3>
                <p className='communication-journal'><strong>{conference}</strong></p>
                <div className='communication-date'>
                    <FontAwesomeIcon icon={faCalendarDays} className='date-icon'/>
                    {date}
                </div>
            </div>
            <a href={url} className='communication-access-url' target='_blank'>Accéder</a>
        </div>
    )
}

export default Communication