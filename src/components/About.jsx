import React from 'react'
import SELF from '../assets/self/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_img'>
            <img src={SELF} alt='personal pic' />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>50+ Completed Projects</small>
            </article>
          </div>
          
          <p>
            I'm a Computer Science graduate major from the University of Massachusetts Boston. I'm a bilingual person who's into photography, playing the guitar and hanging out with friends whenever free. I consider myself to be a creative and open-minded software engineer with a passion and background in web development and computer science. 
          </p>

          <a href='#contact' className='btn btn_primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About