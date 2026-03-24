function ImageButton({target, href, className = "", children}) {
    return(
        <a target={target} href={href} className={`w-max retro-box mt-2.5 p-3 cursor-pointer block ${className}`}>
            {children}
        </a>
    )
}

export default ImageButton