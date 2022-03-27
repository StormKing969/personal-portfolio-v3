import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer_logo'>Sajana Wijesinghe</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/sajana-wijesinghe'>
            <BsLinkedin />
        </a>
        <a target='_blank' rel='noreferrer' href='https://www.facebook.com/sajana.wijesinghe.54'>
            <FaFacebookSquare />
        </a>
        <a target='_blank' rel='noreferrer' href='https://www.instagram.com/wijesinghesaj'>
            <FiInstagram />
        </a>
      </div>

      <div className='footer_copyright'>
        <small>
          &copy; Sajana Wijesinghe. All right reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer