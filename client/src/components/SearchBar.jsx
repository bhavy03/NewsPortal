import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux"
import "../index.css"
import { setSearch } from '../redux/features/cardSlice';
const SearchBar = () => {
    const dispatch = useDispatch();
    const searchChange = (e) => {
        e.preventDefault();
        dispatch(setSearch(e.target.value))
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("search");
        dispatch(setSearch(""))
    }
    return (
            <div className="md:flex md:ml-2 border-2 border-solid border-blue-400 rounded-2xl">
                <div className={`flex flex-row bg-blue-50 w-full md:flex md:flex-row md:w-full px-1 rounded-2xl`}>
                    <CiSearch className='my-2 h-6 w-9 bg-blue-50 ' />
                    <input type="text" placeholder="Search" className="px-3 w-full focus:outline-none bg-blue-50 rounded-2xl" onChange={searchChange} onSubmit={handlesubmit} />
                </div>
            </div>
    )
}

export default SearchBar
