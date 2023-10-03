import Hero from "@/components/organism/hero/Hero";
import Experience from "@/components/organism/experience/Experience";
import Projects from "@/components/organism/projects/Projects";
import Contact from "@/components/organism/contact/Contact";
import Navbar from "@/components/organism/navbar/Navbar";

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
