import React from 'react'
import './Footer.css'
import USDBLogo from './USDBLogo'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className='footer-container'>
        <div className='infos'>
            <a href='https://en.univ-blida.dz/' target="_blank" className='usdb-link'>
                <USDBLogo />
            </a>

            <div className='titles'>
                <p className='title1 title'>Université Saad Dahlab - Blida 1</p>
                <p className='title2 title'>Faculté des Sciences</p>
                <p className='title3 title'>Laboratoire De Recherche Pour Le Developpement Des Systemes Informatises</p>
            </div>
        </div>
        <p className='copyright'>Copyright ©2023 All rights reserved to LRDSI</p>
    </footer>
  )
}

export default Footer