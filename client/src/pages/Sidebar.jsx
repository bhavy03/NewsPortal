/* eslint-disable react/prop-types */
import SideCards from "../components/SideCards"

const Sidebar = ({ filteredCards }) => {
    const lastCards = filteredCards.slice(-10);
    // console.log(filteredCards)
    return (
        <div className="md:flex md:flex-col hidden">
            <h1 className="text-3xl ml-1">Top News</h1>
            {
                lastCards.map((card, i) => (
                    <SideCards
                        key={card.id}
                        card={card}
                        i={i} />
                ))
            }
        </div>
    )
}

export default Sidebar
