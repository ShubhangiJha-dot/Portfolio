import React, { useState }from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkSection from "./components/Work";
import { useEffect } from "react";
import EducationSection from "./components/Education";
import SkillsSection from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "dark" : "light"} > 
        {/* <div className="font-serif" style={{ maxWidth: "800px", margin: "0 auto" }}> */}
        <div className="max-w-[800px] mx-auto px-4 font-serif">

          <Navbar 
              isDarkMode={isDarkMode} 
              setDarkMode={setDarkMode} 
          />
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="experience" className="scroll-mt-24">
        <WorkSection />
      </section>

        <EducationSection />

        <SkillsSection />

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="achievements" className="scroll-mt-24">
        <Achievements />
      </section>
        </div>
      <Footer />

    </div>
  );
}


export default App;