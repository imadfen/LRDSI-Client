import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import './Thesis.css'

function Thesis({thes}) {
    const title = thes.title
    const candidate = thes.candidate
    const framers = thes.framers
    const date = thes.date


    return (
        <div className='Thesis'>
            <div>
                <div className='condidate'>
                    <FontAwesomeIcon icon={faUserGraduate} />
                    <p className='Thesis-candidate'>&nbsp;&nbsp;{candidate}</p>
                </div>
                <h3 className='Thesis-title'>{title}</h3>
                <p className='Thesis-framers'>Cadreurs: &nbsp;&nbsp;<strong>{framers}</strong></p>
                <div className='Thesis-date'>
                    <FontAwesomeIcon icon={faCalendarDays} className='date-icon'/>
                    {date}
                </div>
            </div>
        </div>
    )
}

export default Thesis