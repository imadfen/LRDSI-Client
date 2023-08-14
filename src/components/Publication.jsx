import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import './Publication.css'

function Publication({pub}) {
    const title = pub.title
    const journal = pub.journal
    const authors = pub.authors
    const date = pub.date
    const url = pub.url


    return (
        <div className='publication'>
            <div>
                <p className='publication-author'>&nbsp;&nbsp;{authors}</p>
                <h3 className='publication-title'>{title}</h3>
                <p className='publication-journal'><strong>{journal}</strong></p>
                <div className='publication-date'>
                    <FontAwesomeIcon icon={faCalendarDays} className='date-icon'/>
                    {date}
                </div>
            </div>
            <a href={url} className='publication-access-url' target='_blank'>Accéder</a>
        </div>
    )
}

export default Publication