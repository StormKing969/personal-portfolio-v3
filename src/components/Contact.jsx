import React from 'react'
import { MdMailOutline } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdMailOutline />
            <h4>Email</h4>
            <h5>wijesinghesaj@gmail.com</h5>
            <a target='_blank' rel='noreferrer' href='mailto:wijesinghesaj@gmail.com'>Send a message</a>
          </article>

          <article className='contact_option'>
            <BsFillTelephoneFill />
            <h4>Phone</h4>
            <h5>5088367117</h5>
            <a target='_blank' rel='noreferrer' href=''>Send a message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp />
            <h4>Whatapps</h4>
            <h5>508367447</h5>
            <a target='_blank' rel='noreferrer' href=''>Send a message</a>
          </article>
        </div>

        <form action=''>

        </form>
      </div>
    </section>
  )
}

export default Contact