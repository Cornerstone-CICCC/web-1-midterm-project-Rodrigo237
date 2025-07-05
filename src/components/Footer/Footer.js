import React from 'react'
import "./Footer.css"
export const Footer = () => {
  return (
    <footer>
      <div className='copyright'>
          © 2025 <span>Rodrigo Moreno Barrientos</span> 
      </div>
      <div className='footer-links'>
          <div className='links'>
              <h3>Information</h3>
              <ul>
                <li><a href='#'>Instagram</a></li>
                <li><a href='#'>GitHub</a></li>
                <li><a href='#'>LinkedIn</a></li>
              </ul>
          </div>

          <div className='links'>
              <h3>Contact</h3>
              <ul>
                <li><a href='#'>Message</a></li>                <li><a href='#'>Message</a></li>
                <li><a href='#'>CV</a></li>
              </ul>
          </div>
      </div>
    </footer>
  )
}
