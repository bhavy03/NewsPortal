import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { setCurrentCard } from "../redux/features/cardSlice";
import { useState } from "react"

const CardDetail = () => {
    const dispatch = useDispatch();
    const { cardId } = useParams();
    const [loading, setLoading] = useState()
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const response = await fetch(`https://api.worldnewsapi.com/retrieve-news?ids=${cardId}`, {
                    method: 'GET',
                    headers: {
                        'x-api-key': `${import.meta.env.VITE_API_KEY}`,
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const cardData = await response.json();
                // console.log(cardData)
                dispatch(setCurrentCard(cardData))
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [cardId, dispatch]);
    const { currentId } = useSelector((state) => state.card);
    let currentNews = {};
    if (currentId?.news?.length > 0) {
        currentNews = currentId.news[0];
    }

    return (
        <>
            {loading ?
                <div className="skeleton w-screen h-screen bg-stone-100"></div>
                :
                <div className="flex flex-col bg-blue-50 w-full h-full p-4">
                    <div className="text-5xl p-4 font-sans">
                        {currentNews.title}
                    </div>
                    <img src={currentNews.image} alt="" className="p-4 text-lg" />
                    <div className="p-4 text-lg">
                        {currentNews.text}
                    </div>
                </div>
            }
        </>
    )
}

export default CardDetail
