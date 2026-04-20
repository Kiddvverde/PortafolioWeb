function ImageButton({target, href, className = "", children, onClick}) {
    return(
        <a target={target} href={href} onClick={onClick} className={`w-max retro-box mt-2.5 p-3 cursor-pointer block ${className}`}>
            {children}
        </a>
    )
}

export default ImageButton