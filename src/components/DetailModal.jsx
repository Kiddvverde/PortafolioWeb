import { IoMdClose } from "react-icons/io";
import ImageButton from "./ImageButton";

function DetailModal({ children, description }) {
    return (
        <div className="flex flex-row gap-2 fixed inset-x-20 inset-y-19 ins z-50 justify-center items-stretch retro-box-dashed shadow-xl/100 py-5 px-5">
            <div className="flex justify-center items-center retro-box-dashed flex-1 h-full pl-5 pr-5">
                {children}
            </div>
            <div className="retro-box-dashed flex-1 h-full">
                {description}
            </div>
        </div>
    )
}

export default DetailModal