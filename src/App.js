import React from "react";
import Sidebar from "./components/sidebar";
import HeroSection from "./components/heroSection";
import About from "./components/about";
import GoodAt from "./components/goodat";
import Experiences from "./components/experiences";
import SkillSec from "./components/skillSec";
import ProjectSec from "./components/projects";
import Contact from "./components/contact";
import ScrollToTopButtom from "./components/bottomToTop";
import Footer from "./components/footer";
import Education from "./components/education";

function App() {
  return (
    <div className="App scroll-smooth relative overflow-x-hidden">
      <Sidebar />
      <aside>
        <HeroSection />
        <About />
        <GoodAt />
        <Experiences />
        <Education />
        <SkillSec />
        <ProjectSec />
        <Contact />
        <ScrollToTopButtom />
        <Footer />
      </aside>
    </div>
  );
}

export default App;
