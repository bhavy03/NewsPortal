/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';

const Cards = ({ card }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/card/${card.id}`)
    }
    function getInitialWords(sentence, wordCount = 25) {
        const words = sentence?.split(' ');
        const initialWords = words?.slice(0, wordCount);
        return initialWords?.join(' ');
    }

    const summary = getInitialWords(card?.text);
    const image = card.image;
    return (
        <>
            <div className="w-full my-3 mx-2 md:h-44 h-32 flex md:p-2 px-4 bg-white shadow-lg hover:shadow-2xl">
                <div className=" flex flex-col justify-start w-4/5 h-full">
                    <div className="md:text-2xl text-sm font-semibold md:flex md:pr-2 overflow-hidden" >{card.title}</div>
                    <div className="md:text-base text-xs font-semibold overflow-hidden md:mb-1 md:pr-2">{summary} ....</div>
                    <div className="md:flex hidden">
                        <div onClick={handleClick} className="border-blue-300 border-solid">
                            <Button variant="outlined">Read More</Button>
                        </div>
                    </div>
                </div>
                <div className="w-1/5 overflow-hidden object-cover md:p-0 py-2">
                    <img src={image} alt={card.author} className="w-full h-full object-cover" />
                </div>
            </div>
        </>
    )
}

export default Cards
