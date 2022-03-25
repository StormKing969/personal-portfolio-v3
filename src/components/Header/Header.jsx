import React from 'react'
import CTA from './CTA'
import SELF from '../../assets/self/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header id='home'>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Sajana Wijesinghe</h1>
        <h5 className='text_light'>Fullstack Developer | Software Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className='self'>
          <img src={SELF} alt='personal pic' />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header