'use client'
import Link from 'next/link';
import React from 'react';

interface SkillProps{
    name:string;
    href:string;
    children:React.ReactNode
}

const Skill = ({name, href, children}:SkillProps) => {
    
  return (
    <Link href={href ?? ''} target='_blank' className='group/skills border rounded border-dashed inline-flex items-center self-end border-black/20 bg-black/5 px-2 py-1 text-sm text-black dark:border-white/30 dark:bg-white/15 dark:text-white'>
            <div className='size-4 shrink-0'>{children}</div>
            <p className='max-w-0 group-hover/skills:max-w-32 opacity-0 group-hover/skills:opacity-100  ml-1 text-sm font-semibold transition-all duration-300'>{name}</p> 
    </Link>
  )
}

export default Skill
