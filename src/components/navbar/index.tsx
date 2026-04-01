'use client'
import React, { useState } from 'react'
import Container from '../Container'
import Image from 'next/image'
import Link from 'next/link'
import {motion, useMotionValueEvent, useScroll} from 'motion/react'


const Navbar = () => {
    const navItems = [
        {title:'About',href:'/about'},
        {title:'Projects',href:'/projects'},
        {title:'Contact',href:'/contact'},
    ]
    const [hovered, setHovered] = useState<Number | null>(null);
    const {scrollY} = useScroll();
    const [scrolled, setScrolled] = useState<Boolean>(false);

    useMotionValueEvent(scrollY, 'change', (latest)=>{
        if(latest > 20){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    })
  return (
    <Container>
      <motion.nav
      animate={{
        boxShadow: scrolled ? 'var(--shadow-aceternity)':'none',
        width: scrolled? '50%':'100%',
        y: scrolled?10:0,
      }}
      transition={{
        duration:0.3,
        ease:'linear'
      }}
       className='fixed inset-x-0 top-0 max-w-4xl mx-auto flex items-center justify-between rounded-full px-3 py-2 bg-white dark:bg-neutral-800'>
        <Image className='h-10 w-10 rounded-full object-cover object-top' src='/RISHI_Photo.jpg' width={100} height={100} alt="rishi image"/>
        <div className='flex items-center'>
            {navItems.map((item,idx)=>(
                <Link className='relative text-sm px-4 py-1' href={item.href} key={idx} onMouseEnter={()=>setHovered(idx)} onMouseLeave={()=>setHovered(null)}>
                    {hovered == idx && <motion.span layoutId='hovered-span' className='absolute inset-0 h-full w-full rounded-lg bg-neutral-100 dark:bg-neutral-700'></motion.span>}
                    <span className='relative z-10'>{item.title}</span>
                </Link>
            ))}
        </div>
      </motion.nav>
    </Container>
  )
}

export default Navbar
