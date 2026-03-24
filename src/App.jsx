import { useState } from "react";
import "./styles/index.css"

// Componentes jeje :)
import Navbar from "./components/Navbar"
import ProfileSection from "./components/sections/ProfileSection"
import ProjectsSection from "./components/sections/ProjectsSection";
import TechStackSection from "./components/sections/TechStackSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import DetailModal from "./components/DetailModal";

function App() {
  const [section, setSection] = useState("profile");
  const [openedCert, setOpenedCert] = useState("a");

  return (
    <>
      <div className="min-h-screen bg-pattern bg-black">
        <div className="max-w-2xl mx-auto retro-box min-h-screen shadow-xl/100">
          <Navbar onSelectSection={setSection}/>
          
          {section === "profile" && <ProfileSection setOpenedCert={setOpenedCert} />}
          {section === "projects" && <ProjectsSection />}
          {section === "techstack" && <TechStackSection />}
          {section === "experience" && <ExperienceSection />}

          {openedCert === "Python1" && <DetailModal><h1 className="retro-text">holaaaaaaaaa</h1></DetailModal>}
        </div>
      </div>
    </>
  )
}

export default App
