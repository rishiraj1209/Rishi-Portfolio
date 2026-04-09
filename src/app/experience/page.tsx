'use client'
import Container from '@/src/components/Container'
import Skill from '@/src/components/Skill'
import experiences from '@/src/data/experiences'
import React from 'react'
import { motion } from 'motion/react'

const page = () => {
  return (
    <Container className='py-20 md:py-30 px-4 md:px-10 min-h-screen'>
            <div className='mb-10'>
              <h1 className='text-3xl font-semibold text-primary dark:text-neutral-100 mb-2'>Experience</h1>
              <p className='font-medium text-secondary dark:text-neutral-400 text-sm md:text-base'>My work experiences across different companies and roles.</p>
            </div>

            <motion.div
             initial={{
                y:20,
                opacity:0,
                filter:"blur(10px)"
             }}
             animate={{
                y:0,
                opacity:1,
                filter:"blur(0px)"
             }}
             transition={{
                duration:0.3,
                ease:'easeInOut'
             }}
            >
                {experiences.map((exp,idx)=>(
                    <div key={idx} className='my-4 text-[12px] md:text-base'>
                        <div className='flex flex-col gap-2 md:flex-row md:justify-between md:items-center border-b border-neutral-200 dark:border-neutral-700 max-w-full'>
                            <div className='flex min-w-0 flex-col items-start'>
                                <span className='text-primary dark:text-neutral-100 font-semibold text-lg break-words'>{exp.company} {exp.isCurrent && <span className='text-[10px] md:text-[12px] ml-2 bg-green-100 border border-green-500 px-2 py-1  font-light rounded-md text-neutral-700 dark:text-neutral-100 dark:bg-green-950 dark:border-green-700'>Working</span>}</span>
                                <span className='text-secondary dark:text-neutral-400'>{exp.position}</span>
                            </div>
                            <div className='flex min-w-0 flex-col items-end'>
                                <span className='text-secondary dark:text-neutral-400'>{exp.startDate} - {exp.endDate}</span>
                                <span className='text-secondary dark:text-neutral-400'>{exp.location}</span>
                            </div>
                        </div>
                        <div>
                            <div className='my-4'>
                                <p className='text-lg font-medium'>Technologies and Tools</p>
                                <div className='flex flex-wrap gap-2 items-center'>
                                    {exp.technologies && exp.technologies.map((tech,idx)=>(
                                        <Skill key={idx} name={tech.name} href={tech.href}>
                                            {tech.icon}
                                        </Skill>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className='text-lg font-medium'>What I've done</p>
                                <div>
                                    {exp.discription.map((des,idx)=>(
                                        <p key={idx} className='text-[10px] md:text-sm text-neutral-700 dark:text-neutral-300'>-{des}</p>
                                    ))}
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                ))}
            </motion.div>
    </Container>
  )
}

export default page
