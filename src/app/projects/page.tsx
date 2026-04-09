'use client'
import Container from '@/src/components/Container'
import projects from '@/src/data/projects'
import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import Skill from '@/src/components/Skill'


const page = () => {
  return (
    <Container className='py-20 md:py-30 px-4 md:px-10 min-h-screen '>
            <div className='mb-10'>
              <h1 className='text-3xl font-semibold text-primary dark:text-neutral-100 mb-2'>Projects</h1>
              <p className='font-medium text-secondary dark:text-neutral-400 text-sm md:text-base'>A few products and experiments I have shipped</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {projects.map((project,idx)=>(
                  <motion.div 
                  initial={{
                      opacity:0,
                      x: (idx %2 == 0)? -30:30,
                  }}
                  whileInView={{
                      opacity:1,
                      x:0,
                  }}
                  transition={{
                      duration:0.3,
                      ease:'easeInOut'
                  }}
                  className='group/project relative mb-4 max-w-full overflow-hidden' key={project.title}>
                      <Link href={project.href}>
                          <Image className='object-cover w-full h-60 rounded-xl border border-slate-200 dark:border-slate-500 group-hover/project:scale-102 transition-all duration-200' src={project.image} alt={project.title} height={300} width={300} loading='eager' />
                      </Link>
                      <h1 className='text-primary dark:text-neutral-100 mb-2 font-semibold text-lg'>{project.title}</h1>
                      <div className='flex flex-wrap gap-2 items-center'>
                        {project.technologies && project.technologies.map((tech,idx)=>(
                            <Skill key={idx} name={tech.name} href={tech.href}>
                                {tech.icon}
                            </Skill>
                        ))}
                      </div>
                      <p className='text-secondary dark:text-neutral-400 max-w-80 mt-4 wrap-break-words'>{project.description}</p>
                  </motion.div>
              ))}
            </div>
    </Container>
  )
}

export default page
