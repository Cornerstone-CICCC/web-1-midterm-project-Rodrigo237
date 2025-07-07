import React from 'react'
import "./projects.css"

const Projects = () => {
  return (
    <div className='container_projects'>
      <h1 className='title_Projects'>Projects</h1>
      <p className='description_projects'>You’ll find a selection of projects where I’ve built scalable mobile apps (Android/Kotlin) and responsive web solutions </p>
      <div className='project_grid'>
        <div className='project_card'>
          <img src='' alt='Obesity Children'></img>
          <h3>Obesity Children</h3>
        </div>
        <div className='project_card'>
          <img src='' alt='Obesity Children'></img>
          <h3>Teaching parents about obesity</h3>
        </div>
        <div className='project_card'>
          <img src='' alt='Obesity Children'></img>
          <h3>Coyoacan Projects</h3>
        </div>
        <div className='project_card'>
          <img src='' alt='Obesity Children'></img>
          <h3>Psychological Analysis of Patients with Degenerative Diseases</h3>
        </div>
        <div className='project_card'>
          <img src='' alt='Obesity Children'></img>
          <h3>Beverage distribution</h3>
        </div>
        <div className='project_card'>
          <img src='' alt='Obesity Children'></img>
          <h3>Safe Cycling</h3>
        </div>
        <div className='project_card'>
          <img src='' alt='Obesity Children'></img>
          <h3>Burst App Web</h3>
        </div>
        <div className='project_card'>
          <img src='' alt='Obesity Children'></img>
          <h3>Movie Catalog</h3>
        </div>
      </div>
    </div>
  )
}
export default Projects;