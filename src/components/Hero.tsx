import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div>
        <h1 className="text-2xl text-primary dark:text-neutral-100 md:text-4xl font-bold tracking-tight">Rishi Raj</h1>
        <p className="text-secondary dark:text-neutral-400 text-sm md:text-base pt-4">I'm a software developer with a passion for building scalable and efficient systems, I'm currently stuying at IIT Patna</p>
        <div className='flex gap-2 mt-4'>
            <Link className='text-secondary dark:text-neutral-400 hover:scale-110 transition-all duration-300' href='https://github.com/rishiraj1209' target='_blank'><IconBrandGithub/></Link>
            <Link className='text-secondary dark:text-neutral-400 hover:scale-110 transition-all duration-300' href='https://x.com/rishi033_raj' target='_blank'><IconBrandX/></Link>
            <Link className='text-secondary dark:text-neutral-400 hover:scale-110 transition-all duration-300' href='https://www.linkedin.com/in/rishi-raj-a5b525281/' target='_blank'><IconBrandLinkedin/></Link>
        </div>
    </div>
  )
}

export default Hero
