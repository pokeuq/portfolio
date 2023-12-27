import About from "@/components/about";
import Contact from "@/components/contacts";
import Experience from "@/components/experience";
import Intro from "@/components/into";
import Projects from "@/components/projects";
import SectionDevider from "@/components/section-devider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDevider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
