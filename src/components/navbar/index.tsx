'use client'
import React, { useState } from 'react'
import Container from '../Container'
import Image from 'next/image'
import Link from 'next/link'
import {motion, useMotionValueEvent, useScroll} from 'motion/react'
import Themetoggle from '../Themetoggle'
import { useTheme } from 'next-themes'


const Navbar = () => {
  const {theme} = useTheme();
    const navItems = [
        {title:'Home',href:'/'},
        {title:'Projects',href:'/projects'},
        {title:'Contact',href:'/contactme'},
        {title:'Experience',href:'/experience'}
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
        boxShadow: scrolled ? `${theme === 'dark' ?'var(--shadow-aceternity-dark)' :'var(--shadow-aceternity)'}`:'none',
        width: scrolled? '50%':'100%',
        y: scrolled?10:0,
      }}
      transition={{
        duration:0.3,
        ease:'linear'
      }}
       className={`fixed z-50 inset-x-0 top-0 max-w-4xl mx-auto flex items-center justify-between px-3 py-2 bg-white dark:bg-neutral-900 ${scrolled? 'rounded-full':''}`}>
        <Image className='h-10 w-10 rounded-full object-cover object-top' src='/RISHI_Photo.jpg' width={100} height={100} alt="rishi image"/>
        <div className='flex items-center gap-2'>
            {navItems.map((item,idx)=>(
                <Link className='relative text-sm px-4 py-1' href={item.href} key={idx} onMouseEnter={()=>setHovered(idx)} onMouseLeave={()=>setHovered(null)}>
                    {hovered == idx && <motion.span layoutId='hovered-span' className='absolute inset-0 h-full w-full rounded-lg bg-neutral-100 dark:bg-neutral-700'></motion.span>}
                    <span className='relative z-10'>{item.title}</span>
                </Link>
            ))}
            <Themetoggle/>
        </div>
      </motion.nav>
    </Container>
  )
}

export default Navbar
