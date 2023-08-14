import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import './Memory.css'

function Memory({memo}) {
    const title = memo.title
    const candidate = memo.candidate
    const framers = memo.framers
    const date = memo.date


    return (
        <div className='Memory'>
            <div>
                <div className='condidate'>
                    <FontAwesomeIcon icon={faUserGraduate} />
                    <p className='Memory-candidate'>&nbsp;&nbsp;{candidate}</p>
                </div>
                <h3 className='Memory-title'>{title}</h3>
                <p className='Memory-framers'>Cadreurs: &nbsp;&nbsp;<strong>{framers}</strong></p>
                <div className='Memory-date'>
                    <FontAwesomeIcon icon={faCalendarDays} className='date-icon'/>
                    {date}
                </div>
            </div>
        </div>
    )
}

export default Memory