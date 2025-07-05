import React from 'react'
import "./Main.css"
const Main = () => {

  return (
    <div className='background'>
      <div className='container'>
        <div className='photoWrapper'>
            <img src="./images/profile_photo.jpg"  className='profilePhoto'></img>
        <div className='photoShadow'></div>
        </div>
      </div>
      <p className='intro'>My name is</p>
      <h1>Rodrigo Moreno</h1>
      <h2>Web and Mobile Developer</h2>
      <p className='description'>I'm <strong>Software Engineer</strong> specialized in building exceptional digital experiences. Currently,
      I'm focused on websites and mobile applications</p>
      <div className='social-icons'>
        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
      </div>
    </div>
  )
}
export default Main;
