import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { HiOutlineMenu, } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { GoHomeFill } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiNewspaperBold } from "react-icons/pi";
import logo from "../assets/THe.jpg"
import SearchBar from './SearchBar';
import '../index.css'
import Categories from './Categories';

const links = [
    { name: 'Home', to: '/', icon: GoHomeFill },
    { name: 'News', to: '/', icon: PiNewspaperBold },
    { name: 'Subscribe', to: '/user/price', icon: MdOutlineSubscriptions },
];

// eslint-disable-next-line react/prop-types
const NavLinks = ({ handleClick }) => (
    <div className="mt-10">
        {links.map((item) => (
            <NavLink
                key={item.name}
                to={item.to}
                className="flex flex-row justify-start items-center my-8 text-sm font-medium text-blue-950 hover:text-white"
                onClick={() => handleClick && handleClick()}
            >
                <item.icon className="w-6 h-6 mr-2" />
                {item.name}
            </NavLink>
        ))}
    </div>
);

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className='flex flex-col'>
                {/* Mobile view */}
                <div className="md:hidden flex flex-col bg-transparent mb-1 font-semibold text-black">
                    <div className="flex items-center justify-between">
                        <Link to="/" className='text-xl font-semibold'>
                            <img src={logo} alt="SELLOX" className='w-12 h-12 object-cover' />
                        </Link>
                        <div className="flex items-center space-x-3">
                            <Link to="/"><GoHomeFill /></Link>
                            {!mobileMenuOpen ? (
                                <HiOutlineMenu className="w-6 h-6 text-black" onClick={() => setMobileMenuOpen(true)} />
                            ) : (
                                <RiCloseLine className="w-6 h-6 text-black" onClick={() => setMobileMenuOpen(false)} />
                            )}
                        </div>
                    </div>
                    <div className='pt-2'>
                        <SearchBar />
                    </div>
                </div>

                {/* Desktop view */}
                <div className="md:flex md:flex-row md:h-14 md:items-center bg-transparent flex-col-reverse hidden">
                    <SearchBar />
                    <Link to="/" className='md:flex md:items-start md:ml-72 md:text-5xl font-semibold md:letter-spacing rounded-lg text-xl'>
                        <img src={logo} alt="SELLOX" className='w-32 h-44 object-cover' />
                    </Link>
                    <div className="md:flex md:flex-row md:ml-auto md:mr-5 md:space-x-10 flex-row ml-auto mr-3 list-none items-center">
                        <Link to="/" ><GoHomeFill className='w-6 h-6' /></Link>
                        {/* <Link to="/user/favourite" className='md:flex hidden'><MdFavorite className='w-6 h-6'/></Link> */}
                        <Link to="/user/price" className='md:text-lg text-xs text-white md:px-4 md:py-2 p-1 text-center text-md rounded-lg font-semibold bg-[#004aad] hidden hover:text-white hover:font-bold md:flex ml-auto'>Subscribe</Link><p></p>
                    </div>
                </div>
                <div className='bg-transparent text-sm shadow-2xl'>
                    <Categories />
                </div>
            </div >

            <div className={`absolute top-0 h-screen w-1/3 bg-blue-50 backdrop-blur-xl z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
                <img src={logo} alt="logo" className="w-full h-20 object-contain" />
                <NavLinks handleClick={() => setMobileMenuOpen(false)} />
            </div>
        </>
    )
}

export default Navbar
