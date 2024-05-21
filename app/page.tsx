import Contact from "@/components/main/Contact";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Skills from "@/components/main/solar_skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col relative h-full w-full">
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
