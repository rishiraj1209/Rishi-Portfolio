'use client'
import { useState, useEffect } from 'react'
import Container from '../Container'
import Image from 'next/image'
import Link from 'next/link'
import {motion, useMotionValueEvent, useScroll} from 'motion/react'
import Themetoggle from '../Themetoggle'
import { useTheme } from 'next-themes'
import {IconMenu2, IconX } from '@tabler/icons-react'


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
    const [menuOpen, setMenuOpen] = useState<Boolean>(false);
    const [isMobile, setIsMobile] = useState<Boolean>(false);

    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 1024);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
        boxShadow: scrolled && !menuOpen ? `${theme === 'dark' ?'var(--shadow-aceternity-dark)' :'var(--shadow-aceternity)'}`:'none',
        width: scrolled && !isMobile ? '50%':'100%',
        y: scrolled && !isMobile ?10:0,
      }}
      transition={{
        duration:0.3,
        ease:'linear'
      }}
       className={`fixed z-50 inset-x-0 top-0 max-w-4xl mx-auto flex items-center justify-between px-3 py-2 bg-white dark:bg-neutral-900 ${(scrolled && !isMobile)? 'rounded-full':''}`}>
        <Image className='h-10 w-10 rounded-full object-cover object-top' src='/RISHI_Photo.jpg' width={100} height={100} alt="rishi image"/>
        <div className='flex items-center gap-2 max-lg:hidden'>
            {navItems.map((item,idx)=>(
                <Link className='relative text-sm px-4 py-1' href={item.href} key={idx} onMouseEnter={()=>setHovered(idx)} onMouseLeave={()=>setHovered(null)}>
                    {hovered == idx && <motion.span layoutId='hovered-span' className='absolute inset-0 h-full w-full rounded-lg bg-neutral-100 dark:bg-neutral-700'></motion.span>}
                    <span className='relative z-10'>{item.title}</span>
                </Link>
            ))}
        </div>
        <div className='flex items-center gap-2'>
          <button onClick={()=>setMenuOpen((prev)=>!prev)} className='lg:hidden'>{menuOpen?<IconX/>:<IconMenu2/>}</button>
          <Themetoggle/>
        </div>
      </motion.nav>

      {menuOpen && 
        <motion.div 
        initial={{
          y:-200,
          opacity:0
        }}
        animate={{
          y:0,
          opacity:1,
        }}
        transition={{
          duration:0.3,
          ease:'easeInOut'
        }}
         className='fixed top-14 left-0 w-full bg-white dark:bg-neutral-900 z-40 lg:hidden flex flex-col shadow-md py-4 items-center'>
          {navItems.map((item,idx)=>(
                <Link className='py-2 text-lg' href={item.href} key={idx} onClick={() => setMenuOpen(false)}>
                    {item.title}
                </Link>
            ))}
        </motion.div>
      }

      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </Container>
  )
}

export default Navbar
