'use client'
import Container from '@/src/components/Container';
import React, { useState } from 'react'
import { motion } from 'motion/react';
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import Link from 'next/link';

interface formData{
    name:string;
    email:string;
    phone:string;
    message:string;
}

const page = () => {
    const [form ,setForm] = useState<formData>({
        name:'',
        email:'',
        phone:'',
        message:'',
    })

    const handleSubmit = async(e:any)=>{
        e.preventDefault();

        const res = await fetch("api/contact",{
            method:"POST",
            body:JSON.stringify(form)
        })

        const data = await res.json();

        if(data.success){
            alert("message Sent successfully");
            setForm({
                name:'',
                email:'',
                phone:'',
                message:''
            })
        }else{
            alert("failed to send");
        }
    }
  return (
    <Container className='min-h-screen py-20 md:py-30 px-4 md:px-10'>
        <h1 className='text-4xl font-semibold text-primary dark:text-neutral-100 mb-2 text-shadow-md dark:text-shadow-neutral-700'>Contact Me</h1>
        <p className='font-medium text-secondary mb-4'>Have a project in mind or just want to say hi? I'd love to hear from you.</p>

        <div className='flex gap-2 mt-4 mb-8'>
            <div className='border border-neutral-300 dark:border-neutral-600 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-600 dark:hover:bg-neutral-700 hover:bg-neutral-200 cursor-pointer transition-all duration-300 shadow-aceternity dark:shadow-aceternity-dark hover:scale-110'>
                <Link className='text-secondary dark:text-neutral-200' href='https://github.com/rishiraj1209' target='_blank'><IconBrandGithub/></Link>
            </div>
            <div className='border border-neutral-300 dark:border-neutral-600 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-600 dark:hover:bg-neutral-700 hover:bg-neutral-200 cursor-pointer transition-all duration-300 shadow-aceternity dark:shadow-aceternity-dark hover:scale-110'>
                <Link className='text-secondary dark:text-neutral-200' href='https://x.com/rishi033_raj' target='_blank'><IconBrandX/></Link>
            </div>
            <div className='border border-neutral-300 dark:border-neutral-600 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-600 dark:hover:bg-neutral-700 hover:bg-neutral-200 cursor-pointer transition-all duration-300 shadow-aceternity dark:shadow-aceternity-dark hover:scale-110'>
                <Link className='text-secondary dark:text-neutral-200' href='https://www.linkedin.com/in/rishi-raj-a5b525281/' target='_blank'><IconBrandLinkedin/></Link>
            </div>
        </div>

        <motion.div
        initial={{
            opacity:0,
            filter:"blur(10px)",
            y:30
        }}
        animate={{
            opacity:1,
            filter:"blur(0px)",
            y:0
        }}
        transition={{
            duration:0.3,
            ease:"easeInOut"
        }}
         className='flex justify-center items-center border border-neutral-200 dark:border-neutral-600 rounded-lg px-8 py-10 shadow-sm dark:shadow-neutral-500 bg-neutral-50 dark:bg-neutral-800'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
                <input className='outline-0 border border-slate-500 dark:border-zinc-500 rounded-lg px-4 py-2 shadow-aceternity dark:shadow-aceternity-dark'  type="text" placeholder='Enter your name' value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})}/>
                <input className='outline-0 border border-slate-500 dark:border-zinc-500 rounded-lg px-4 py-2 shadow-aceternity dark:shadow-aceternity-dark' type="email" placeholder='Enter your email' value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})}/>
                <input className='outline-0 border border-slate-500 dark:border-zinc-500 rounded-lg px-4 py-2 shadow-aceternity dark:shadow-aceternity-dark' type="text" placeholder='Enter your phone number' value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} />
                <textarea className='outline-0 border border-slate-500 dark:border-zinc-500 rounded-lg px-4 py-2 shadow-aceternity dark:shadow-aceternity-dark' placeholder='Enter your message' value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
                <button className='border border-black py-2 rounded-lg mt-4 bg-neutral-700 dark:bg-neutral-300 text-white dark:text-black shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] active:shadow-none transition-all duration-300 cursor-pointer' type='submit'>Send</button>
            </form>
        </motion.div>
      
    </Container>
  )
}

export default page
