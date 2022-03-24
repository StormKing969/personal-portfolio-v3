import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaCodeBranch } from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/sajana-wijesinghe'>
            <BsLinkedin />
        </a>
        <a target='_blank' rel='noreferrer' href='https://github.com/StormKing969'>
            <FaGithub />
        </a>
        <a target='_blank' rel='noreferrer' href='https://www.facebook.com/sajana.wijesinghe.54'>
            <FaFacebookSquare />
        </a>
        <a target='_blank' rel='noreferrer' href='https://leetcode.com/StormShaodow9'>
            <FaCodeBranch />
        </a>
    </div>
  )
}

export default HeaderSocial