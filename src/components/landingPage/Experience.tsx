'use client'
import React from 'react'
import { motion } from 'motion/react'
import experiences from '../../data/experiences'
const Experience = () => {
  return (
    <div className='my-10'>
      <h1 className='text-2xl font-semibold mb-4'>Experience</h1>
      <motion.div
      initial={{
        opacity:0,
        y:10,
        filter:'blur(10px)'
      }}
      animate={{
        opacity:1,
        y:0,
        filter:'blur(0px)'
      }}
      transition={{
        duration:0.5,
        ease:'easeInOut'
      }}
       className='space-y-4 text-center'>
        {experiences.map((exp,idx)=>(
            <div key={idx} className='flex flex-col gap-2 md:flex-row md:justify-between md:items-center border-neutral-200 dark:border-neutral-700 text-[12px] md:text-base max-w-full'>
                <div className='flex min-w-0 flex-col items-start'>
                    <span className='text-primary dark:text-neutral-100 font-semibold text-lg wrap-break-word'>{exp.company} {exp.isCurrent && <span className='text-[10px] md:text-[12px] ml-2 bg-green-100 border border-green-500 px-2 py-1  font-light rounded-md text-neutral-700 dark:text-neutral-100 dark:bg-green-950 dark:border-green-700'>Working</span>}</span>
                    <span className='text-secondary dark:text-neutral-400'>{exp.position}</span>
                </div>
                <div className='flex min-w-0 flex-col items-end'>
                    <span className='text-secondary dark:text-neutral-400'>{exp.startDate} - {exp.endDate}</span>
                    <span className='text-secondary dark:text-neutral-400'>{exp.location}</span>
                </div>
            </div>
        ))}
        <button className='px-4 py-1 rounded-xl text-primary dark:text-neutral-100 border border-slate-200 dark:border-neutral-700 inline-block cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200'>Show Work Experiences</button>
      </motion.div>
    </div>
  )
}

export default Experience
