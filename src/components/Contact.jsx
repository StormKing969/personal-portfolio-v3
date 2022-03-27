import React, { useRef } from 'react'
import { MdMailOutline } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { FaFacebookMessenger } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hd7t1i3', 'template_nunjusc', form.current, '_I4DP0534xKOIDOvV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdMailOutline className='contact_option_icon' />
            <h4>Email</h4>
            <h5>wijesinghesaj@gmail.com</h5>
            <a target='_blank' rel='noreferrer' href='mailto:wijesinghesaj@gmail.com'>Send a message</a>
          </article>

          <article className='contact_option'>
            <FaFacebookMessenger className='contact_option_icon' />
            <h4>Facebook Messenger</h4>
            <h5>Sajana Wijesinghe</h5>
            <a target='_blank' rel='noreferrer' href='https://m.me/sajana.wijesinghe.54'>Send a message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon' />
            <h4>WhatApps</h4>
            <a target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send?phone=(+15083674447)'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='hidden' name='to_name' value='Sajana'></input>
          <input type='text' name='from_name' placeholder='Your Full Name' required></input>
          <input type='email' name='email' placeholder='Your Email' required></input>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn_primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact