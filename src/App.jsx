import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import GuideAvatar from "./components/GuideAvatar";
import LanyardCard from "./components/LanyardCard";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <LanyardCard />
      <GuideAvatar />
    </>
  );
}

export default App;
