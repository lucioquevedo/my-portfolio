import Hero from "@/components/organism/hero/Hero";
import Experience from "@/components/organism/experience/Experience";
import Projects from "@/components/organism/projects/Projects";
import Contact from "@/components/organism/contact/Contact";
import ThemeToggler from "@/components/atoms/theme-toggler/ThemeToggler";

export default function Home() {
  return (
    <main className="font-sans max-w-[100vw] overflow-hidden">
      <ThemeToggler />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
