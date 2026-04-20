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
  const [openedCert, setOpenedCert] = useState("");

  return (
    <>
      <div className="min-h-screen bg-pattern bg-black">
        <div className="max-w-2xl mx-auto retro-box min-h-screen shadow-xl/100">
          <Navbar onSelectSection={setSection} />

          {section === "profile" && <ProfileSection setOpenedCert={setOpenedCert}/>}
          {section === "projects" && <ProjectsSection />}
          {section === "techstack" && <TechStackSection />}
          {section === "experience" && <ExperienceSection />}

          {openedCert === "Python1" &&
            <DetailModal onClick={setOpenedCert} >
              <img src="/certs/python1.png" alt="Python Essentials 1 Badge" />
            </DetailModal>}

          {openedCert === "AWSTrained" &&
            <DetailModal onClick={setOpenedCert} >
              <img src="/certs/aws_cloudfoundations.png" alt="AWS Academy Graduate Badge" />
            </DetailModal>}

          {openedCert === "RDataScience" &&
            <DetailModal onClick={setOpenedCert} >
              <img src="/certs/R_for_data_science.png" alt="R for Data Science" />
            </DetailModal>}

          {openedCert === "DataR" &&
            <DetailModal onClick={setOpenedCert} >
              <img src="/certs/Data_vis_with_R.png" alt="Data Visualization with R" />
            </DetailModal>}

          {openedCert === "RDB" &&
            <DetailModal onClick={setOpenedCert} >
              <img src="/certs/Using_R_with_db.png" alt="Using R with Databases" />
            </DetailModal>}

          {openedCert === "redhat" &&
            <DetailModal onClick={setOpenedCert} >
              <img src="/certs/redhat.png" alt="Red Hat" />
            </DetailModal>}
            
        </div>
      </div>
    </>
  )
}

export default App
