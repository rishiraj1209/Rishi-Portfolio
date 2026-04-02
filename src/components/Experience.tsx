'use client'
import React from 'react'
import { motion } from 'motion/react'

const Experience = () => {
    const experiences = [
        {
            company:"Uptoskills",
            position:"ReactJS Intern",
            startDate:"March 2026",
            endDate:"present",
            location:"Bengaluru, India (remote)"
        },
        {
            company:"HCL (Guvi)",
            position:"Full Stack Developement Intern",
            startDate:"June 2025",
            endDate:"September 2025",
            location:"Chennai, India (remote)"
        }
    ]
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
            <div key={idx} className='flex justify-between items-center'>
                <div className='flex flex-col items-start'>
                    <span className='text-primary dark:text-neutral-100 font-semibold text-lg'>{exp.company}</span>
                    <span className='text-secondary dark:text-neutral-400'>{exp.position}</span>
                </div>
                <div className='flex flex-col items-end'>
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
