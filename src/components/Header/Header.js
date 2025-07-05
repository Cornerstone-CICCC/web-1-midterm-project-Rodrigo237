import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
export const Header = () => {
  return (
    <header className="header">
        <nav className="nav-buttons">
            <button className="nav-button"><NavLink to="/main">Home</NavLink></button>
            <button className="nav-button"><NavLink to="/aboutme">About me</NavLink></button>
            <button className="nav-button"><NavLink to="/projects">Projects</NavLink></button>
            <button className="nav-button"><NavLink to="/skills">Skills</NavLink></button>
            <button className="nav-button"><NavLink to="/work">Work</NavLink></button>     
            <button className="nav-button"><NavLink to="/contact">Contact</NavLink></button>
        </nav>
    </header>
  )
}
