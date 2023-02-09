import React, { Fragment, lazy, useState } from 'react';
import '../../assets/css/style.css'
import siteLogoDarkMobile from '../../assets/images/logo/T Black mobile.png';
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom';
import { IoSearchOutline, IoBagOutline, IoCloseOutline } from "react-icons/io5";
import { AiFillFacebook, AiOutlineUser } from "react-icons/ai";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Megamenu1 from '../../assets/megamenu_images/megamenu1.webp'
import Megamenu2 from '../../assets/megamenu_images/megamenu2.webp'
import FilterItem from '../search_drawer/FilterItem';
import { GiSelfLove } from 'react-icons/gi';
import { ImGoogle } from 'react-icons/im';

// import pages or components
const SearchDrawer = lazy(() => import('../../components/search_drawer/SearchDrawer.js'));

const MobileMenu = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const [search, setSearch] = useState(false);
    const toggleSearch = () => {
        setSearch((prevState) => !prevState)
    }
    const [ser, setSer] = useState(false);
    const toggleSearchs = () => {
        setSer((prevState) => !prevState)
    }
    return (
        <Fragment>
            <div className='bg-red-500'>
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
 
            <section className='pt-2 MOBILE-MENU flex lg:hidden md:hidden bg-transparent absolute w-full'>
                <div className='HAMBURGER-ICON space-y-2 cursor-pointer px-3'
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-black"></span>

                </div>
                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    {/* <div
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
                    </div> */}
                    <div className='Parants_mobile z-50'>
                        <div className='grid grid-cols-3 mobile-nav-mega'>
                            <div className='group pt-2'>
                                <a href="" type="" className='cursor-pointer font-gilroy ml-6'>Shop &darr;</a>
                                <div className='hidden group-hover:flex flex-col absolute left-0 pl-5 pt-5 w-screen bg-white text-black duration-300 mt-0 lg:mt-6 font-gilroy'>
                                    <div className='grid grid-cols-1 gap-5'>
                                            <div className='flex flex-col border-black border-b-2 pb-6 mobile-nav-mega_first_cetagory'>
                                            <h3 className='mb-2 lg:mb-4 text-xl text-gray-500 font-gilroybold'>Categories</h3>
                                            <a href="/" class="hover:underline pt-3 hover:text-red-600 text-sm ">New Arrival</a>
                                                <a href="/" class="hover:underline pt-3 hover:text-red-600 text-sm ">Panjabi</a>
                                                <a href="/" class="hover:underline pt-3 hover:text-red-600 text-sm ">New Arrival</a>
                                                <a href="/" class="hover:underline pt-3 hover:text-red-600 text-sm ">New Arrival</a>
                                        </div>
                                            <div className='flex flex-col border-black border-b-2 mobile-nav-mega_first_cetagory pb-6'>
                                            <h3 className='mb-2 lg:mb-4 text-xl text-gray-500 font-gilroybold'>Size Guides</h3>
                                                <a href="/" class="hover:underline pt-3 hover:text-red-600 text-sm ">Panjabis</a>
                                                <a href="/" class="hover:underline pt-3 hover:text-red-600 text-sm ">Shirts</a>
                                                <a href="/" class="hover:underline pt-3 hover:text-red-600 text-sm ">Pants</a>
                                        </div>
                                        <div className='flex flex-col border-black'>
                                            <img src={Megamenu1} className="h-96 w-96" alt="" />
                                        </div>
                                        <div className='flex flex-col'>
                                            <img src={Megamenu2} className="h-96 w-96" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className='pt-2'>
                                <a href="/all-new-panjabis">
                                    <button type="" className='cursor-pointer font-gilroy'>New Arrivals</button>
                                </a>
                            </div>
                                <div className='pt-2 ml-5'>
                                <a href="/panjabis">
                                    <button type="" className='cursor-pointer font-gilroy'>Clothing</button>
                                </a>
                            </div>
                        </div>
                        <ul>

                            <li className='group py-4 text-center'>
                 
                            </li>
                            <li className='py-4 text-center'>
 
                            </li>
      
                        </ul>
                    </div>
                </div>
          
                <div className='lg:hidden block'>
                    <button
                        type="button"
                        className='search-menu-btn bg-transparent cursor-pointer flex px-3'
                        onClick={toggleSearchs}
                    >
                        <IoSearchOutline className='text-2xl text-black' />
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
                        <img src={siteLogoDarkMobile}
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
                            <AiOutlineUser className='text-2xl' />
                        </button>
                    </Link>
            
                    <Link to="/cart">
                        <button
                            type="button"
                            className='user-menu-btn cursor-pointer pr-3'>
                            <IoBagOutline className='text-2xl' />
                        </button>
                    </Link>
                    <Link to="/cart">
                        <button
                            type="button"
                            className='user-menu-btn cursor-pointer pr-3'>
                            <GiSelfLove className='text-2xl ' />
                        </button>
                    </Link>
                </div>
                <div>
                    
                </div>
            </section>
                {/*    ==================== model 3  start ======================================================== */}
                {/* <label for="my-modal-3" class="btn">open modal</label> */}
                
                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative MODAL-popUP">
                        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="font-bold  text-center text-white py-5 text-2xl ">Sing Up</h3>
                        <div className='flex justify-center mb-4'>
                            <input type="text" placeholder=" FirstName" class="input input-bordered w-full max-w-xs justify-center" />
                        </div>
                        <div className='flex justify-center mb-4'>
                            <input type="text" placeholder="LastName" class="input input-bordered w-full max-w-xs justify-center" />
                        </div>
                        <div className='flex justify-center mb-4'>
                            <input type="text" placeholder="email/number" class="input input-bordered w-full max-w-xs justify-center text-black" />
                        </div>
                        <div className='flex justify-center mb-4'>
                            <select class="select w-full max-w-xs">
                                <option disabled selected>Gender</option>
                                <option>Male</option>
                                <option>FeMale</option>

                            </select>
                        </div>
                        <div class='flex justify-center pt-10  '>
                            {/* <button className='btn block text-center px-24'>cuntinue</button> */}
                            <label for="my-modal-6 " className='btn block text-center px-24 py-3 space-x-2 text-1xl'>Sing Up</label>
                        </div>
                        <div className='flex mt-10 relative'>
                            <hr className='bg-red-500 w-48 mt-4'></hr>
                            <p className='w-20 justify-center text-center  absolute lg:ml-48 selection:text-2xl'>or</p>
                            <hr className='bg-red-500 w-64 mt-4'></hr>
                        </div>
                        <div className='flex justify-center mt-10'>


                            <div className='text-white bg-gray-800 py-3 px-6 mr-4 cursor-pointer flex text-center'>
                                {/* <FiFacebook className='text-white'></FiFacebook>  */}
                                <AiFillFacebook className='text-3xl text-white mr-2 '></AiFillFacebook>
                                <h6 className='text-2xl'> Facebook</h6>
                            </div>
                            <div className='text-white bg-gray-800 py-3 px-6 mr-4 cursor-pointer flex text-center'>
                                {/* <FiFacebook className='text-white'></FiFacebook>  */}
                                <ImGoogle className='text-3xl text-white mr-2 '></ImGoogle>
                                <h6 className='text-2xl'> Google</h6>
                            </div>

                        </div>



                    </div>
                </div>
                {/*    ==================== model 3  end ======================================================== */}


            </div>
        </Fragment>
    );
}

export default MobileMenu;