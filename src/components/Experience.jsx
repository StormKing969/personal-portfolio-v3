import React from 'react'
import { BsBookmarkCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>My Skills</h5>
    <h2>My knowledge</h2>

    <div className='container experience_container'>
      <div className='experience_frontend'>
        <h3>Frontend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>HTML</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>CSS</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>SASS/SCSS</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>REACT</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>EJS</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>JavaScript</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>JQuery</h4>
          </article>
        </div>
      </div>

      <div className='experience_backend'>
        <h3>Backend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Node JS</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>MongoDB</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Python</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Java</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Express JS</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Firebase</h4>
          </article>
        </div>
      </div>

      <div className='experience_management'>
        <h3>Management</h3>
        <div className='experience_content'>
          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Problem Solving</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Leadership</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Delegation</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Communication</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Decision Making</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Planning</h4>
          </article>
        </div>
      </div>

      <div className='experience_personal'>
        <h3>Personal</h3>
        <div className='experience_content'>
          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Honest</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Accountable</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Ethical & Loyal</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Critical Thinking</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Flexible</h4>
          </article>

          <article className='experience_details'>
            <BsBookmarkCheckFill className='experience_details_icon' />
            <h4>Technological</h4>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience