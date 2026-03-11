function ProfileCard() {
    return (
        <div className="flex items-start w-max w-max-xl h-max bg-black border-5 border-dashed border-zinc-800 mx-auto mt-6">
            <img className="w-60 h-50 m-4 object-cover border-5 border-zinc-800" src="/leomacbookcamera.jpeg" alt="Leonardo"/>
            <div className="flex flex-col m-3">
                <h1 className="text-white font-pixel text-2xl">Leonardo Cruz</h1>
                <p className="text-white font-pixel">Fullstack Web Developer specialized in the PERN Stack</p>
                <p className="text-white font-pixel">Based in Monterrey, México 🇲🇽</p>
            </div>
        </div>
    )
}

export default ProfileCard