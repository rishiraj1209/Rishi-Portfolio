'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'

const Projects = () => {
    const projects = [
        {
            title:"AI Resume Builder",
            description:"A website for building resumes levraging AI for enhancement of Resumes",
            image:'/resume-builder.png',
            href:'#'
        },
        {
            title:"Book My Stay",
            description:"A single place for destination booking and listing your favourite destinations",
            image:'/Wanderlust.png',
            href:'#'
        },
        {
            title:"Imagify",
            description:"A website for generationg images from AI by providing user prompts",
            image:'/Imagify.png',
            href:'#'
        },
        {
            title:"Weather App",
            description:"A weather app for getting real time weather updates seamlessly",
            image:'/weather.png',
            href:'#'
        }
    ]
  return (
    <div className='my-10'>
      <h1 className='font-semibold text-2xl text-primary dark:text-neutral-100 mb-2'>Projects</h1>
      <p className='text-secondary dark:text-neutral-400 text-sm md:text-base'>I love building web apps and products that can impact millions.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 p-8'>
        {projects.map((project,idx)=>(
            <motion.div 
            initial={{
                opacity:0,
                y:20,
            }}
            whileInView={{
                opacity:1,
                y:0,
            }}
            transition={{
                duration:idx*0.2,
                ease:'easeInOut'
            }}
            className='group relative mb-4' key={project.title}>
                <Link href={project.href}>
                    <Image className='object-cover w-90 h-60 rounded-xl border border-slate-200 dark:border-slate-500 group-hover:scale-102 transition-all duration-200' src={project.image} alt={project.title} height={300} width={300}/>
                </Link>
                <h1 className='text-primary dark:text-neutral-100 mb-2 font-semibold text-lg'>{project.title}</h1>
                <p className='text-secondary dark:text-neutral-400 max-w-80'>{project.description}</p>
            </motion.div>
        ))}
      </div>
      <div className='text-center'>
        <button className='px-4 py-1 rounded-xl text-primary dark:text-neutral-100 border border-slate-200 dark:border-neutral-700 inline-block cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200'>Show All Projects</button>
      </div>
    </div>
    
  )
}

export default Projects
