function SectionWrapper ({ children }) {
    return (
        <section className="flex items-start w-max-xl h-max retro-box-dashed mx-auto mt-2 ml-2 mr-2">
            {children}
        </section>
    )
}

export default SectionWrapper
