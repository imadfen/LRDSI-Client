import React from 'react'
import dateCorrector from '../Functions/dateCorrector'
import './ShowPresentation.css'

function ShowPresentation({data, modify, noAccess}) {
    return (
        <div className="presentation-div">
            <div className='section'>
                <h3 className='title'>L'auteur:</h3>
                <p className='data'>{data.author}</p>
                <h3 className='title score'>-</h3>
                <p className='data'>{data.author_status}</p>
            </div>

            <div className='section'>
                <h3 className='title'>La date:</h3>
                <p className='data'>{dateCorrector(data.post_date)}</p>
            </div>

            <div className='section presentation'>
                <h3 className='title'>La presentation:</h3>
                <p className='data'>&nbsp;&nbsp;{data.post_content}</p>
            </div>

            <div className='buttons'>
                {noAccess ?
                    <p className='no-access-msg'>Vous n'êtes pas autorisé à modifier ces données</p>
                :   <button onClick={modify}>Modifier</button>}
            </div>
        </div>
    )
}

export default ShowPresentation