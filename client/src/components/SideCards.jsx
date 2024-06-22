/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
// import { GrFavorite } from "react-icons/gr";
// import { MdFavorite } from "react-icons/md";
// import { useState } from "react";

const SideCards = ({ card }) => {
    const navigate = useNavigate()
    // const [favtrue, setFavtrue] = useState(false)
    const handleClick = () => {
        navigate(`/card/${card.id}`)
    }
    // const favClick = () => {
    // setFavtrue(!favtrue)
    // }
    // console.log(card)

    return (
        <>
            <div className="w-full my-3 h-28 flex bg-white shadow-lg hover:shadow-2xl">
                <div className=" flex flex-col justify-start h-full">
                    <div className="text-lg font-semibold flex h-3/6 overflow-clip p-1" >{card.title}</div>
                    <div className="flex p-2">
                        <div onClick={handleClick} className="h-2/6 border-blue-300 border-solid">
                            <Button variant="outlined">Read More</Button>
                        </div>
                        {/* <div className="ml-auto mr-5 flex items-center border-2 border-solid border-blue-400 p-2 rounded-md" onClick={favClick}> */}
                        {/* { */}
                        {/* favtrue ? <MdFavorite /> : <GrFavorite /> */}
                        {/* } */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideCards
