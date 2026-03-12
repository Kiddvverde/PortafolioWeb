import { useState } from "react";
import "./styles/index.css"

// Componentes jeje :)
import Navbar from "./components/Navbar"
import ProfileSection from "./components/sections/ProfileSection"
import ProjectsSection from "./components/sections/ProjectsSection";
import TechStackSection from "./components/sections/TechStackSection";
import ExperienceSection from "./components/sections/ExperienceSection";

function App() {
  const [section, setSection] = useState("profile");

  return (
    <>
      <div className="min-h-screen bg-pattern bg-black">
        <div className="max-w-2xl mx-auto bg-black border-5 border-zinc-800 min-h-screen shadow-xl/100">
          <Navbar onSelectSection={setSection}/>
          
          {section === "profile" && <ProfileSection />}
          {section === "projects" && <ProjectsSection />}
          {section === "techstack" && <TechStackSection />}
          {section === "experience" && <ExperienceSection />}
        </div>
      </div>
    </>
  )
}

export default App
