function DetailModal({ children }) {
    return (
        <div className="fixed inset-x-20 inset-y-19 ins z-50 flex items-center justify-center retro-box-dashed shadow-xl/100">
            {children}
        </div>
    )
}

export default DetailModal