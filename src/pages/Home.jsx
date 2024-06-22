import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import Cards from "../components/Cards"
import { setAllNews } from "../redux/features/cardSlice"
import { useEffect } from "react";
import Sidebar from './Sidebar';
import PaginationRounded from '../components/Pagination';

const Home = () => {
    const dispatch = useDispatch();
    const { searchField, allNews, selectedCatagory } = useSelector((state) => state.card);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(10);
    const [loading, setLoading] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const response = await fetch('https://api.worldnewsapi.com/top-news?source-country=in&language=en', {
                    method: 'GET',
                    headers: {
                        'x-api-key': `${import.meta.env.VITE_API_KEY}`,
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const cardsData = await response.json();
                // console.log(cardsData)
                cardsData?.top_news.map((ok) => (
                    // console.log(ok.news)
                    dispatch(setAllNews(ok.news))
                ))
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [dispatch]);


    const filteredByCategory = allNews?.filter(cards => cards.catgory === selectedCatagory.toLowerCase());
    const filteredCards = filteredByCategory.length > 0
        ? filteredByCategory.filter(cards => cards.title.toLowerCase().includes(searchField.toLowerCase()))
        : allNews.filter(cards => cards.title.toLowerCase().includes(searchField.toLowerCase()));

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentlyCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <div className="flex w-full flex-1">
                    <div className={`${currentlyCards.length === 0 ? "w-full" : "md:w-3/4 md:p-2 py-2"} bg-white w-full`}>
                        <div className="flex flex-col md:justify-stretch justify-center items-center">
                            {
                                loading ? (
                                    [...Array(20)].map((_, i) => <div className='skeleton h-32 w-screen mb-4 mx-4 bg-stone-100' key={i} />)
                                ) :
                                    currentlyCards.length === 0 ? (
                                        <div className='w-full'>Sorry, no results found</div>
                                    ) :
                                        currentlyCards.map((card, i) => (
                                            <Cards
                                                key={card.id}
                                                card={card}
                                                i={i} />
                                        ))
                            }
                        </div>
                    </div>
                    <div className='md:w-1/4 md:p-2 bg-white overflow-hidden'>
                        {
                            loading ? (
                                [...Array(20)].map((_, i) => <div className="skeleton h-14 w-full mb-4 mx-4 bg-stone-100" key={i} />)
                            ) :
                                <Sidebar filteredCards={filteredCards} />
                        }

                    </div>
                </div>
                <PaginationRounded cardsPerPage={cardsPerPage} totalCards={filteredCards.length} handlePageChange={handlePageChange} />
            </div>
        </>
    )
}

export default Home
