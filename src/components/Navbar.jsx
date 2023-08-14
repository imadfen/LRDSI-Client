import React,{useState} from 'react'
import logo from '../assets/logo.png';
import {NavLink} from 'react-router-dom';
import './navbar.css'

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className='left'>
        <NavLink to='/'><img src={logo} alt='erreur'></img></NavLink> </div>
        <div className='right'>
          <NavLink to='Presentation' className="navlink">Présentation</NavLink>
          <NavLink to='teams' className="navlink">Équipes</NavLink>
          <NavLink to='pubevents' className="navlink">Publications/Evènements</NavLink>
          <NavLink to='projects' className="navlink">Projets</NavLink>
          <NavLink to='contact' className="navlink">Contact</NavLink>
        </div>
    </div>
    </>
    
  )
}

export default Navbar