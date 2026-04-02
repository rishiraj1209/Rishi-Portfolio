'use client'
import Image from "next/image";
import Container from "../components/Container";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Motivation from "../components/Motivation";

export default function Home() {
  return (
    <div
     className="min-h-screen flex items-start justify-start ">
      <Container className="min-h-[200vh] p-4 pt-20 pb-10">
          <Hero/>
          <Experience/>
          <Projects/>
          <Motivation/>
      </Container>
    </div>
  );
}
