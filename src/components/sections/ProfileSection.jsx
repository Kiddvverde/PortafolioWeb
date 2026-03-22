import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import SocialLink from "../SocialLink"
import { useState } from "react"

function ProfileSection() {
    const [openedCert, setOpenedCert] = useState();

    return (
        <>
            <section className="flex items-start w-max-xl h-max retro-box-dashed mx-auto mt-2 ml-2 mr-2">
                <img className="w-60 h-50 m-4 object-cover border-5 border-zinc-800" src="/leomacbookcamera.jpeg" alt="Leonardo"/>
                <div className="flex flex-col m-3">
                    <h1 className="retro-text text-2xl">Leonardo Cruz</h1>
                    <p className="retro-text">Fullstack Web Developer specialized in the PERN Stack</p>
                    <p className="retro-text">I turn ideas into full-stack web applications, handling everything from the API to the UI.</p>
                    <p className="retro-text">Based in Monterrey, México 🇲🇽</p>
                    <div className="flex flex-row gap-3">

                        <SocialLink href={"https://github.com/kiddvverde"}>
                            <FaGithub size={32} color="white"/>
                        </SocialLink>

                        <SocialLink href={"https://x.com/leokernel"}>
                            <FaTwitter size={32} color="white"/>
                        </SocialLink>

                        <SocialLink href={""}>
                            <FaLinkedin size={32} color="white"/>
                        </SocialLink>

                    </div>
                </div>
            </section>

            <div className="flex flex-row gap-2">

                <section className="flex-1 w-xs h-max retro-box-dashed mx-auto mt-2 ml-2 mr-2">
                    <h1 className="retro-text text-2xl center ml-3 mt-2">Certificates</h1>

                    <div className="flex flex-wrap gap-2">
                        <SocialLink href={""} className="ml-3 mb-2">
                            <img className="w-24 h-24" src="/badges/python_essentials_1.png" alt="Python Essentials 1 Badge" />
                        </SocialLink>

                        <SocialLink href={""} className="ml-2 mb-2">
                            <img className="w-24 h-24" src="/badges/python_essentials_1.png" alt="Python Essentials 1 Badge" />
                        </SocialLink>

                        <SocialLink href={""} className="ml-2 mb-2">
                            <img className="w-24 h-24" src="/badges/python_essentials_1.png" alt="Python Essentials 1 Badge" />
                        </SocialLink>

                        <SocialLink href={""} className="ml-2 mb-2">
                            <img className="w-24 h-24" src="/badges/python_essentials_1.png" alt="Python Essentials 1 Badge" />
                        </SocialLink>
                    </div>

                </section>

                <section className="flex-1 w-xs h-max retro-box-dashed mx-auto mt-2 ml-2 mr-2">
                    <h1 className="retro-text text-2xl center ml-2">About me</h1>
                </section>
            </div>
        </>
    )
}

export default ProfileSection