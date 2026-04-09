import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <div>
        <h1 className="text-2xl text-primary dark:text-neutral-100 md:text-4xl font-bold tracking-tight">Rishi Raj</h1>
        <p className="text-secondary dark:text-neutral-400 text-sm font-medium md:text-base pt-4">I'm a software developer with a passion for building scalable and efficient systems, I'm currently stuying at IIT Patna</p>
        <div className='flex items-center gap-8 mt-4'>
          <div className='flex items-center gap-2 '>
              <div className='border border-neutral-300 dark:border-neutral-600 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-600 dark:hover:bg-neutral-700 hover:bg-neutral-200 cursor-pointer transition-all duration-300 shadow-aceternity dark:shadow-aceternity-dark hover:scale-110'>
                  <Link className='text-secondary dark:text-neutral-200' href='https://github.com/rishiraj1209' target='_blank'><IconBrandGithub/></Link>
              </div>
              <div className='border border-neutral-300 dark:border-neutral-600 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-600 dark:hover:bg-neutral-700 hover:bg-neutral-200 cursor-pointer transition-all duration-300 shadow-aceternity dark:shadow-aceternity-dark hover:scale-110'>
                  <Link className='text-secondary dark:text-neutral-200' href='https://x.com/rishi033_raj' target='_blank'><IconBrandX/></Link>
              </div>
              <div className='border border-neutral-300 dark:border-neutral-600 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-600 dark:hover:bg-neutral-700 hover:bg-neutral-200 cursor-pointer transition-all duration-300 shadow-aceternity dark:shadow-aceternity-dark hover:scale-110'>
                  <Link className='text-secondary dark:text-neutral-200' href='https://www.linkedin.com/in/rishi-raj-a5b525281/' target='_blank'><IconBrandLinkedin/></Link>
              </div>
          </div>

          <motion.div
          initial={{
            x:0,
            scale:1,
          }}
          whileHover={{
            x:10,
            scale:1.1
          }}
          transition={{
            duration:0.2,
            ease:'easeInOut'
          }}
           className='flex items-center py-2 px-4 rounded-full shadow-aceternity dark:shadow-aceternity-dark border border-neutral-200 dark:border-neutral-700 cursor-pointer'>
            <Link href="https://drive.google.com/file/d/16ELih8UsO4C9EDCN6yYZ8hN6zN_Ce0sY/view?usp=sharing" target='_blank'>
              Get Resume
            </Link>
          </motion.div>
        </div>
        
    </div>
  )
}

export default Hero
