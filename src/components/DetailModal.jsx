import { IoMdClose } from "react-icons/io";
import ImageButton from "./ImageButton";

function DetailModal({ children, onClick }) {
    return (
        <div className="flex gap-2 fixed inset-x-90 inset-y-19 z-50 justify-center items-stretch retro-box-dashed shadow-xl/100 py-5 px-5 pl-15 pr-15">
            {children}
            <ImageButton target="_blank" onClick={onClick} className="self-start">
                <IoMdClose size={16} color="white"/>
            </ImageButton>
        </div>
    )
}

export default DetailModal