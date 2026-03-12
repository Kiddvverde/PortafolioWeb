function Navbar() {
    return(
        <nav className="flex justify-center gap-4 px-4 py-3 border-b-5 border-zinc-800">
            <button className="text-white bg-black border-5 border-zinc-800 w-32 font-pixel">Inicio</button>
            <button className="text-white bg-black border-5 border-zinc-800 w-32 font-pixel">Experience</button>
            <button className="text-white bg-black border-5 border-zinc-800 w-32 font-pixel">Projects</button>
            <button className="text-white bg-black border-5 border-zinc-800 w-32 font-pixel">Tech Stack</button>
        </nav>
    )
}

export default Navbar