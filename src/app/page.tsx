import Image from "next/image";
import Container from "../components/Container";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
          <h1 className="text-2xl text-primary md:text-4xl font-bold tracking-tight">Hello, there!</h1>
          <p className="text-secondary text-sm md:text-base pt-4">I'm a software developer with a passion for building scalable and efficient systems, I'm currently stuying at IIT Patna</p>
      </Container>
    </div>
  );
}
