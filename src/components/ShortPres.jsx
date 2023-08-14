import React, { useEffect, useState } from 'react'
import curvedShape from "../assets/curved-shape.svg";
import './ShortPres.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function ShortPres({presData}) {
    return (
        <div className='home-pres-section'>
            <div className='home-pres-text'>
                <h1>Laboratoire de Recherche pour le Développement des Systèmes Informatisés</h1>
                <p>{presData}</p>
            </div>

            <div className='curved-shape-container'>
                <a className='see-more-btn' href='/presentation'>
                    <div className='see-more-btn-content'>
                        <div>
                            <p>Plus</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <FontAwesomeIcon className='see-more-btn-long-arrow' icon={faArrowRightLong} />
                    </div>
                </a>
                <img src={curvedShape} className='curved-shape'/>
            </div>
        </div>
    )
}

export default ShortPres