import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import HamburgerList from './HamburgerList';

function Navbar({isLargeScreen, openDrawer}) {
  return (
    <>
      <div className='navbar'>
        <div className='left'>
          <NavLink to='/'><img src={logo} alt='erreur'></img></NavLink>
        </div>
        {isLargeScreen ?
          <div className='right'>
            <NavLink to='Presentation' className="navlink">Présentation</NavLink>
            <NavLink to='teams' className="navlink">Équipes</NavLink>
            <NavLink to='pubevents' className="navlink">Publications/Evènements</NavLink>
            <NavLink to='projects' className="navlink">Projets</NavLink>
            <NavLink to='contact' className="navlink">Contact</NavLink>
          </div>
          :
          <div onClick={openDrawer} className='hamburger-button'>
            <FontAwesomeIcon icon={faBars} />
          </div>
        }
      </div>
    </>

  )
}

export default Navbar