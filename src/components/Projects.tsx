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
      <p className='text-secondary text-sm md:text-base'>I love building web apps and products that can impact millions.</p>
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
                    <Image className='object-cover w-90 h-60 rounded-xl border border-slate-200 group-hover:scale-102 transition-all duration-200' src={project.image} alt={project.title} height={300} width={300}/>
                </Link>
                <h1 className='text-primary mb-2 font-semibold text-lg'>{project.title}</h1>
                <p className='text-secondary max-w-80'>{project.description}</p>
            </motion.div>
        ))}
      </div>
    </div>
    
  )
}

export default Projects
