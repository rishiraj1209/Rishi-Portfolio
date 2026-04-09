'use client'
import Image from "next/image";
import Container from "../components/Container";
import Projects from "../components/landingPage/Projects";
import Experience from "../components/landingPage/Experience";
import Hero from "../components/landingPage/Hero";
import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.div
    initial={{
      filter:"blur(10px)",
      y:-10,
      opacity:0,
    }}
    animate={{
      filter:"blur(0px)",
      y:0,
      opacity:1,
    }}
    transition={{
      duration:0.3,
      ease:"easeInOut"
    }}
     className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] py-20 md:py-30 px-4 md:px-10">
          <Hero/>
          <Experience/>
          <Projects/>
      </Container>
    </motion.div>
  );
}
