import Hero from "@/components/organism/hero/Hero";
import Experience from "@/components/organism/experience/Experience";
import Projects from "@/components/organism/projects/Projects";
import Contact from "@/components/organism/contact/Contact";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
