function Navbar({ onSelectSection }) {
    return(
        <nav className="flex justify-center gap-4 px-4 py-3 border-b-5 border-zinc-800">
            <button onClick={() => onSelectSection("profile")} className="retro-text bg-black border-5 border-zinc-800 flex-1 pl-3 pr-3 cursor-pointer">
                Profile
            </button>
            <button onClick={() => onSelectSection("projects")} className="retro-text bg-black border-5 border-zinc-800 flex-1 pl-3 pr-3 cursor-pointer">
                Projects
            </button>
            <button onClick={() => onSelectSection("techstack")} className="retro-text bg-black border-5 border-zinc-800 flex-1 pl-3 pr-3 cursor-pointer">
                Tech Stack
            </button>
            <button onClick={() => onSelectSection("experience")} className="retro-text bg-black border-5 border-zinc-800 flex-1 pl-3 pr-3 cursor-pointer">
                Experience
            </button>
        </nav>
    )
}

export default Navbar