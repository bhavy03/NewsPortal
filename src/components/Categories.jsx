import { useDispatch } from "react-redux"
import { setSelectedCatagory } from "../redux/features/cardSlice";

const Categories = () => {
    const dispatch = useDispatch();
    const handleClick = (event) =>{
        dispatch(setSelectedCatagory(event.target.textContent))
    }
    return (
        <div className="md:m-2 md:flex list-none md:justify-evenly md:items-center flex overflow-x-scroll space-x-5 m-2 h-8 text-xs">
            <li className="border-solid border-blue-400 border-2 bg-blue-100 text-[#1976D2] font-semibold rounded-lg md:px-3 p-1 hover:cursor-pointer hover:bg-blue-200" onClick={handleClick}>News</li>
            <li className="border-solid border-blue-400 border-2 bg-blue-100 text-[#1976D2] font-semibold rounded-lg md:px-3 p-1 hover:cursor-pointer hover:bg-blue-200 md:flex hidden" onClick={handleClick}>Latest News</li>
            <li className="border-solid border-blue-400 border-2 bg-blue-100 text-[#1976D2] font-semibold rounded-lg md:px-3 p-1 hover:cursor-pointer hover:bg-blue-200" onClick={handleClick}>Industry</li>
            <li className="border-solid border-blue-400 border-2 bg-blue-100 text-[#1976D2] font-semibold rounded-lg md:px-3 p-1 hover:cursor-pointer hover:bg-blue-200" onClick={handleClick}>Technology</li>
            <li className="border-solid border-blue-400 border-2 bg-blue-100 text-[#1976D2] font-semibold rounded-lg md:px-3 p-1 hover:cursor-pointer hover:bg-blue-200" onClick={handleClick}>Sports</li>
            <li className="border-solid border-blue-400 border-2 bg-blue-100 text-[#1976D2] font-semibold rounded-lg md:px-3 p-1 hover:cursor-pointer hover:bg-blue-200" onClick={handleClick}>Politics</li>
            <li className="border-solid border-blue-400 border-2 bg-blue-100 text-[#1976D2] font-semibold rounded-lg md:px-3 p-1 hover:cursor-pointer hover:bg-blue-200" onClick={handleClick}>Entertainment</li>
            <li className="border-solid border-blue-400 border-2 bg-blue-100 text-[#1976D2] font-semibold rounded-lg md:px-3 p-1 hover:cursor-pointer hover:bg-blue-200" onClick={handleClick}>Lifestyle</li>
            <li className="border-solid border-blue-400 border-2 bg-blue-100 text-[#1976D2] font-semibold rounded-lg md:px-3 p-1 hover:cursor-pointer hover:bg-blue-200" onClick={handleClick}>Education</li>
        </div>
    )
}

export default Categories
