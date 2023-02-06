import React, { Fragment, lazy, useState } from 'react';
import '../../assets/css/style.css';
import siteLogoWhite from '../../assets/images/logo/T white.png';
import siteLogoWhiteMobile from '../../assets/images/logo/T white mobile.png';
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom';
import { IoSearchOutline, IoBagOutline, IoClose, IoCloseOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Megamenu1 from '../../assets/megamenu_images/megamenu1.webp'
import Megamenu2 from '../../assets/megamenu_images/megamenu2.webp'
import { GiSelfLove } from 'react-icons/gi';
import FilterItem from '../../components/search_drawer/FilterItem';


// components or pages
const TopBarMenu = lazy(() => import('./TopBarMenu.js'));
const RightNavbarItems = lazy(() => import('../../components/right_navbar_items/RightNavbarItems.js'));
const SearchDrawer = lazy(() => import('../../components/search_drawer/SearchDrawer.js'));

const HomeNav = (props) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [search, setSearch] = useState(false);
    const toggleSearch = () => {
        setSearch((prevState) => !prevState)
    }
    // search
    const [ser, setSer] = useState(false);
    const toggleSearchs = () => {
        setSer((prevState) => !prevState)
    }
    return (
        <Fragment>
            <div className={ser ? 'serch_box' : 'serch_box_show'}>
                <div>
                    {/* <loClose className="text-5xl text-black"></loClose> */}
                    <IoCloseOutline className='text-5xl text-black closehIcon'
                    onClick={toggleSearchs}
                    />

                </div>

                <div className="serch_div" >
                    <div className='serch_div1'>
                        <input className=' text-3xl' placeholder='   Search...'>
                        </input>
                        <IoSearchOutline className='text-4xl text-black sarchIcon' />

                    </div>
                </div>
                <FilterItem></FilterItem>
            </div>
            <section className='pt-2 MOBILE-MENU flex lg:hidden bg-transparent z-10 absolute w-full'>
                <div className='HAMBURGER-ICON space-y-2 cursor-pointer px-3'
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                
                </div>
                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div
                        className="absolute top-0 right-0 mx-8 my-8 cursor-pointer border-2 rounded-lg"
                        onClick={() => setIsNavOpen(false)}
                    >
                        <svg
                            className="h-8 w-8 text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    <div className='menu-nav-open'>
                        <div className='grid grid-cols-3 gap-2 '>
                            <div className='group px-4'>
                                <a href="/" type="" className='cursor-pointer font-gilroy'>Shop &darr;</a>
                                <div className='hidden group-hover:flex flex-col absolute left-0 p-10 w-screen bg-white text-black duration-300 mt-0 lg:mt-6 font-gilroy'>
                                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                                        <div className='flex flex-col border-b-2 lg:border-r-2 border-black'>
                                            <h3 className='mb-2 lg:mb-4 text-lg lg:text-xl md:text-xl text-gray-600 font-gilroybold'>Categories</h3>
                                            <a href="/" class="hover:underline hover:text-red-600 text-sm lg:text-xl md:text-xl">New Arrival</a>
                                            <a href="/" class="hover:underline hover:text-red-600 text-sm lg:text-xl md:text-xl">Panjabi</a>
                                            <a href="/" class="hover:underline hover:text-red-600 text-sm lg:text-xl md:text-xl">New Arrival</a>
                                            <a href="/" class="hover:underline hover:text-red-600 text-sm lg:text-xl md:text-xl">New Arrival</a>
                                        </div>
                                        <div className='flex flex-col border-b-2 lg:border-r-2 border-black'>
                                            <h3 className='mb-2 lg:mb-4 text-lg lg:text-xl md:text-xl text-gray-600 font-gilroybold'>Size Guides</h3>
                                            <a href="/" class="hover:underline hover:text-red-600 text-sm lg:text-xl md:text-xl">Panjabis</a>
                                            <a href="/" class="hover:underline hover:text-red-600 text-sm lg:text-xl md:text-xl">Shirts</a>
                                            <a href="/" class="hover:underline hover:text-red-600 text-sm lg:text-xl md:text-xl">Pants</a>
                                        </div>
                                        <div className='flex flex-col border-r-0 lg:border-r-2 border-black'>
                                            <img src={Megamenu1} className="h-96 w-96" alt="" />
                                        </div>
                                        <div className='flex flex-col'>
                                            <img src={Megamenu2} className="h-96 w-96" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <a href="/all-new-panjabis">
                                    <button type="" className='cursor-pointer font-gilroy'>New Arrivals</button>
                                </a>
                            </div>
                            <div className='px-4'>
                                <a href="/panjabis">
                                    <button type="" className='cursor-pointer font-gilroy'>Clothing</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:hidden block'>
                    <button
                        type="button"
                        className='search-menu-btn bg-transparent cursor-pointer flex px-3'
                        onClick={toggleSearchs}
                    >
                        <IoSearchOutline className='text-2xl text-white' />
                    </button>
                    <Drawer
                        open={search}
                        onClose={toggleSearch}
                        direction='right'
                        className='bla bla bla'
                        size={330}
                    >
                        <>
                            <SearchDrawer />
                        </>
                    </Drawer>
                </div>


                <div className='lg:hidden'>
                    <Link to="/">
                        <img src={siteLogoWhiteMobile}
                            alt="website logo"
                            className='h-16 absolute left-2/4 -translate-x-2/4 top-0 z-10'
                        />
                    </Link>
                </div>
                <div className='lg:hidden flex mr-0 ml-auto'>
                    <Link to="/signin">
                        <button
                            type="button"
                            className='user-menu-btn cursor-pointer pr-3'>
                            <AiOutlineUser className='text-2xl text-white' />
                        </button>
                    </Link>
                    {/* cart page */}
                    <Link to="/cart">
                        <button
                            type="button"
                            className='user-menu-btn cursor-pointer pr-3'>
                            <IoBagOutline className='text-2xl text-white' />
                        </button>
                    </Link>
                </div>
                <div className='lg:hidden block'>
                    <button
                        type="button"
                        className='search-menu-btn bg-transparent cursor-pointer flex px-3'
                        onClick={toggleSearch}
                    >
                        <GiSelfLove className='text-2xl text-white' />
                    </button>

                </div>

            </section>
            <div className='header-section'>
                <div className='absolute top-10 z-20'>
                    <TopBarMenu />
                </div>
                {/* Top bar container */}
                <Link to="/">
                    <img src={siteLogoWhite}
                        alt="website logo"
                        className='absolute w-48 left-2/4 -translate-x-2/4 h-auto top-0 z-10'
                    />
                </Link>
                <div className=' '>
                    <RightNavbarItems setSer={setSer}/>
                </div>

            </div>
        </Fragment>
    );
};

export default HomeNav;