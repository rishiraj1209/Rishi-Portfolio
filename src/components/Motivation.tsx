'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react';
import Container from './Container';

const Motivation = () => {
    const [idx, setIdx] = useState(0);
    const quotes = [
        {
            quote: "If the pain doesn't kill me, it will only make me stronger.",
            author: "Sung Jin-Woo",
            context: "Solo Leveling"
        },
        {
            quote: "Hard work beats talent when talent doesn’t work hard.",
            author: "Tim Notke",
            context: "High school basketball coaching philosophy"
        },
        {
            quote: "In the middle of difficulty lies opportunity.",
            author: "Albert Einstein",
            context: "On overcoming challenges"
        },
        {
            quote: "A person grows once they are able to defeat their weaker self.",
            author: "Itachi Uchiha",
            context: "Naruto"
        },
        {
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
            context: "Stanford Commencement Speech (2005)"
        },
        {
            quote: "Fear is not evil. It tells you what your weakness is.",
            author: "Gildarts Clive",
            context: "Fairy Tail"
        },
        {
            quote: "Do what you can, with what you have, where you are.",
            author: "Theodore Roosevelt",
            context: "On perseverance"
        },
        {
            quote: "Power comes in response to a need, not a desire.",
            author: "Goku",
            context: "Dragon Ball Z"
        },
        {
            quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            author: "Winston Churchill",
            context: "On resilience during WWII"
        },
        {
            quote: "When you give up, that's when the game ends.",
            author: "Mitsuyoshi Anzai",
            context: "Slam Dunk"
        },
        {
            quote: "Your time is limited, so don’t waste it living someone else’s life.",
            author: "Steve Jobs",
            context: "Stanford Commencement Speech (2005)"
        },
        {
            quote: "A lesson without pain is meaningless.",
            author: "Edward Elric",
            context: "Fullmetal Alchemist"
        },
        {
            quote: "The best way to predict the future is to create it.",
            author: "Peter Drucker",
            context: "Management philosophy"
        },
        {
            quote: "Push through the pain. Giving up hurts more.",
            author: "Vegeta",
            context: "Dragon Ball Super"
        },
        {
            quote: "It always seems impossible until it's done.",
            author: "Nelson Mandela",
            context: "On leadership and perseverance"
        },
        {
            quote: "Whatever you lose, you’ll find it again. But what you throw away you’ll never get back.",
            author: "Kenshin Himura",
            context: "Rurouni Kenshin"
        },
        {
            quote: "Dream big and dare to fail.",
            author: "Norman Vaughan",
            context: "Motivational speaking"
        },
        {
            quote: "If you don’t take risks, you can’t create a future.",
            author: "Monkey D. Luffy",
            context: "One Piece"
        },
        {
            quote: "Discipline is the bridge between goals and accomplishment.",
            author: "Jim Rohn",
            context: "Personal development teachings"
        },
        {
            quote: "The world isn’t perfect. But it’s there for us, doing the best it can.",
            author: "Roy Mustang",
            context: "Fullmetal Alchemist"
        }
    ];

    useEffect(()=>{
        setIdx(Math.floor((Math.random())*20));
    },[])   
  return (
    <Container className='pb-10 px-4'>
        <motion.div 
        initial ={{
            opacity:0,
            filter:'blur(10px)'
        }}
        whileInView={{
            opacity:1,
            filter:'blur(0px)'
        }}
        transition={{
            duration:0.3,
            ease:'easeInOut'
        }}
        className='rounded-xl border border-slate-200 dark:border-neutral-700 relative h-40 shadow-aceternity dark:shadow-aceternity-dark'>
            <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-gray-200 dark:fill-neutral-800 ">
                <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
            </svg>
            <p className='absolute left-4 top-4 text-xl italic text-primary dark:text-neutral-100 tracking-wide z-10'>"{quotes[idx].quote}"</p>
            <p className='absolute bottom-4 right-4 text-secondary dark:text-neutral-400'>- {quotes[idx].author}, {quotes[idx].context}</p>
        </motion.div>
    </Container>
  )
}

export default Motivation
