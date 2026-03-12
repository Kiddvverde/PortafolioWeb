function Navbar({ onSelectSection }) {
    return(
        <nav className="flex justify-center gap-4 px-4 py-3 border-b-5 border-zinc-800">
            <button onClick={() => onSelectSection("profile")} className="text-white bg-black border-5 border-zinc-800 w-max pl-3 pr-3 font-pixel cursor-pointer">
                Profile
            </button>
            <button onClick={() => onSelectSection("projects")} className="text-white bg-black border-5 border-zinc-800 w-max pl-3 pr-3 font-pixel cursor-pointer">
                Projects
            </button>
            <button onClick={() => onSelectSection("techstack")} className="text-white bg-black border-5 border-zinc-800 w-max pl-3 pr-3 font-pixel cursor-pointer">
                Tech Stack
            </button>
            <button onClick={() => onSelectSection("experience")} className="text-white bg-black border-5 border-zinc-800 w-max pl-3 pr-3 font-pixel cursor-pointer">
                Experience
            </button>
        </nav>
    )
}

export default Navbar