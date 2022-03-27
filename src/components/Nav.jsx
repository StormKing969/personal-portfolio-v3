import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'
import { BiBook } from 'react-icons/bi'
import { BiMessageDetail } from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')

  return (
    <nav>
      <a href='#home' className={activeNav === '#home' ? 'active' : ''} onClick={() => setActiveNav('#home')} onsc>
        <AiOutlineHome />
      </a>
      <a href='#about' className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}>
        <AiOutlineUser />
      </a>
      <a href='#experience' className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}>
        <BiBook />
      </a>
      <a href='#portfolio' className={activeNav === '#portfolio' ? 'active' : ''} onClick={() => setActiveNav('#portfolio')}>   
        <MdWorkOutline />
      </a>
      <a href='#contact' className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}>
        <BiMessageDetail />
      </a>
    </nav>
  )
}

export default Nav