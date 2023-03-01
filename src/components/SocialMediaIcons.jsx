import React from 'react'
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"


const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a className='hover:opacity-50 transition duration-500 max-w-[30px] md:max-w-[30px]'
        href="https://www.linked.com"
        target="_blank"
        rel="noreferrer"
        >
            <img alt="linkedin-link" src={linkedin} />
        </a>
        <a className='hover:opacity-50 transition duration-500 max-w-[30px] md:max-w-[30px]'
        href="https://www.linked.com"
        target="_blank"
        rel="noreferrer"
        >
            <img alt="linkedin-link" src={github} />
        </a>
    </div>
  )
}

export default SocialMediaIcons