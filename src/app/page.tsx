import Image from "next/image";
import Container from "../components/Container";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 pt-20 pb-10">
          <h1 className="text-2xl text-primary md:text-4xl font-bold tracking-tight">Rishi Raj</h1>
          <p className="text-secondary text-sm md:text-base pt-4">I'm a software developer with a passion for building scalable and efficient systems, I'm currently stuying at IIT Patna</p>
          <Projects/>
      </Container>
    </div>
  );
}
