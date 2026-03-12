import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

function ProfileCard() {
    return (
        <div className="flex items-start w-max-xl h-max bg-black border-5 border-dashed border-zinc-800 mx-auto mt-6 ml-2 mr-2">
            <img className="w-60 h-50 m-4 object-cover border-5 border-zinc-800" src="/leomacbookcamera.jpeg" alt="Leonardo"/>
            <div className="flex flex-col m-3">
                <h1 className="text-white font-pixel text-2xl">Leonardo Cruz</h1>
                <p className="text-white font-pixel">Fullstack Web Developer specialized in the PERN Stack</p>
                <p className="text-white font-pixel">I turn ideas into full-stack web applications, handling everything from the API to the UI.</p>
                <p className="text-white font-pixel">Based in Monterrey, México 🇲🇽</p>
                <div className="flex flex-row gap-3">
                    <a href="https://github.com/kiddvverde" target="_blank" className="w-max border-5 border-zinc-800 mt-2.5 p-3 cursor-pointer block"><FaGithub size={32} color="white"/></a>
                    <a href="https://x.com/leokernel" target="_blank" className="w-max border-5 border-zinc-800 mt-2.5 p-3 cursor-pointer block"><FaTwitter size={32} color="white"/></a>
                    <a href="" target="_blank" className="w-max border-5 border-zinc-800 mt-2.5 p-3 cursor-pointer block"><FaLinkedin size={32} color="white"/></a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard