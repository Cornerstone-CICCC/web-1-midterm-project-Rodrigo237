import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <section className='contact_section'>
      <h2>Get In Touch</h2>
      <p>
            I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, my inbox is always open. I'll try my best to get back to you! <span class="highlight">Say Hello</span>
      </p>
      <form className='contact_form'>
          <textarea placeholder='Write me...' rows={6}>
          </textarea>
          <button type='submit'>Send Email</button>
      </form>
    </section>
  )
}
export default Contact;