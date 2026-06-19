import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import HeroSection from "./components/heroSection";
import Spinner from "./components/spinner";
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
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   window.onload = () => {
  //     setLoading(false); // Set loading to false once everything on the page has loaded
  //   };
  // }, []);

  return (
    <div className="App scroll-smooth relative overflow-x-hidden">
      {/* {loading ? (
        <Spinner />
      ) : ( */}
      <>
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
      </>
      {/* )} */}
    </div>
  );
}

export default App;
