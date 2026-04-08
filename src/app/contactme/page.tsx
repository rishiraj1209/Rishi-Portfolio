'use client'
import Container from '@/src/components/Container';
import React, { useState } from 'react'
import { motion } from 'motion/react';

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
    <Container className='min-h-screen pt-30 px-10'>
        <h1 className='text-center text-4xl font-semibold text-primary dark:text-neutral-100 mb-4 text-shadow-md dark:text-shadow-neutral-700'>Contact Me</h1>
        <div className='flex justify-center items-center border border-neutral-200 dark:border-neutral-600 rounded-lg px-8 py-10 shadow-sm shadow-black dark:shadow-neutral-500 bg-neutral-200 dark:bg-neutral-700'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
                <input className='outline-0 border border-slate-500 dark:border-zinc-500 rounded-lg px-4 py-2 shadow-aceternity dark:shadow-aceternity-dark'  type="text" placeholder='Enter your name' value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})}/>
                <input className='outline-0 border border-slate-500 dark:border-zinc-500 rounded-lg px-4 py-2 shadow-aceternity dark:shadow-aceternity-dark' type="email" placeholder='Enter your email' value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})}/>
                <input className='outline-0 border border-slate-500 dark:border-zinc-500 rounded-lg px-4 py-2 shadow-aceternity dark:shadow-aceternity-dark' type="text" placeholder='Enter your phone number' value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} />
                <textarea className='outline-0 border border-slate-500 dark:border-zinc-500 rounded-lg px-4 py-2 shadow-aceternity dark:shadow-aceternity-dark' placeholder='Enter your message' value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
                <button className='border border-black py-2 rounded-lg mt-4 bg-neutral-700 dark:bg-neutral-300 text-white dark:text-black shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] active:shadow-none transition-all duration-300 cursor-pointer' type='submit'>Send</button>
            </form>
        </div>
      
    </Container>
  )
}

export default page
