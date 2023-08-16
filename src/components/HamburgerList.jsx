import React from 'react'
import Drawer from '@mui/material/Drawer';
import { NavLink } from 'react-router-dom'

function HamburgerList({ isOpen, onClose }) {
    return (
        <Drawer
            anchor="right"
            open={isOpen}
            onClose={onClose}
        >
            <div className="humberger-list">
                <NavLink to='Presentation' className="navlink" onClick={onClose}>Présentation</NavLink>
                <NavLink to='teams' className="navlink" onClick={onClose}>Équipes</NavLink>
                <NavLink to='pubevents' className="navlink" onClick={onClose}>Publications/Evènements</NavLink>
                <NavLink to='projects' className="navlink" onClick={onClose}>Projets</NavLink>
                <NavLink to='contact' className="navlink" onClick={onClose}>Contact</NavLink>
            </div>
        </Drawer>
    )
}

export default HamburgerList