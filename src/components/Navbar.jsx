const sections = ["profile", "projects", "techstack", "experience"];
const labels = ["Profile", "Projects", "Tech Stack", "Experience"]

function Navbar({ onSelectSection }) {
    return(
        <nav className="flex justify-center gap-4 px-4 py-3 border-b-5 border-zinc-800">
            {sections.map((section, i) => (
               <button
               key={section}
               onClick={() => onSelectSection(section)}
               className="retro-text bg-black border-5 border-zinc-800 flex-1 pl-3 pr-3 cursor-pointer"
               >
                {labels[i]}
               </button> 
            ))}
        </nav>
    )
}

export default Navbar