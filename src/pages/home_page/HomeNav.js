import React, { Fragment, lazy, useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/css/style.css';
import siteLogoWhite from '../../assets/images/logo/T white.png';
import siteLogoWhiteMobile from '../../assets/images/logo/T white mobile.png';
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom';
import { IoSearchOutline, IoBagOutline, IoClose, IoCloseOutline } from "react-icons/io5";
import { AiFillFacebook, AiOutlineUser } from "react-icons/ai";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Megamenu1 from '../../assets/megamenu_images/megamenu1.webp'
import Megamenu2 from '../../assets/megamenu_images/megamenu2.webp'
import { GiSelfLove } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { ImGoogle } from 'react-icons/im';
import { Swiper, SwiperSlide } from "swiper/react";
import '../../components/new_arrival/newAribe.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper"
import { SlArrowLeft } from 'react-icons/sl';


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
    // serch box
        const [arrival, setArrival] = useState([]);
    useEffect(() => {
        axios
            .get("/data/NewArrival.json")
            .then((res) => setArrival(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <Fragment>
            <div>
                {/* modal 1 */}
                {/* ============================== Login Cuntinue =================================================*/}
                <input type="checkbox" id="my-modal" class="modal-toggle" />
                <div class="modal ">
                    <div class="modal-box MODAL-popUP">
                        <p className='text-center pt-10'>1/2</p>
                        <h3 class="font-bold  text-center text-white py-5 text-2xl font-gilroy ">Login</h3>
                        <div className=' mx-9'>
                        <div className='MODAL-popUP-input'>
                            <input type="text" placeholder=" Enter Number" class="py-2 px-2" />
                        </div>
                            <p className='text-right pt-1 cursor-pointer'>Forget Password ?</p>

                        <div className='MODAL-popUP-input mt-6'>
                                <label for="my-modal-6 " className='uppercase text-white block text-center bg-[#121D45] py-2 space-x-2 text-1xl'>cuntinue</label>
                        </div>

                        <div className='flex mt-10 relative'>
                            <hr className=' w-[50%] bg-white '></hr>
                                <p className=' z-50  text-2xl absolute left-[45%] bg-[#74746ed3] bottom-[-13px] px-4'>or</p>
                                <hr className=' w-[50%] bg-white '></hr>
                        </div>
                        <div class="modal-action ">
                            <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        </div>
                        <div className='flex justify-between mt-3'>


                            <div className='text-white  py-1 px-2 cursor-pointer flex  justify-center justify-items-center text-center border w-36'>
                               
                                    <AiFillFacebook className='text-1xl text-[#121D45]  mt-1 mr-3'></AiFillFacebook>
                                    <h6 className='text-1xl  font-semibold'> Facebook</h6>
                            </div>
                                <div className='text-white py-1 px-2 justify-center justify-items-center   cursor-pointer flex text-center w-36 border'>
                        
                                    <ImGoogle className='text-1xl text-[#121D45] mt-1 mr-3 '></ImGoogle>
                                <h6 className='text-1xl text-center font-semibold'> Google</h6>
                            </div>

                        </div>
                        </div>
                        <div className=' flex justify-center mt-10 MODAL-popUP_footer'>
                            <p className='text-white text-1xl py-2'>Not registered ?
                                <span className='text-white  text-1xl cursor-pointer '> Sign Up Now</span>
                            </p>
                           
                        </div>
                    </div>
                </div>
             

              
             
               

            </div>
            <div className={ser ? 'serch_box' : 'serch_box_show'}>
                <div>
                    <IoCloseOutline className='lg:text-5xl text-2xl text-black closehIcon'
                    onClick={toggleSearchs}
                    />

                </div>

                <div className="serch_div" >
                    <div className='serch_div1 '>
                        <input className=' text-3xl' placeholder='Search for any category or products'>
                        </input>
                        <IoSearchOutline className='lg:text-4xl text-2xl text-black sarchIcon' />

                    </div>
                </div>
                <div className='lg:h-[60vh] lg:pb-10 pb-0  '>
                
                    <div className=' z-50 px-20 '>
                        <Swiper
                            slidesPerView={1.3}
                            spaceBetween={2}
                            slidesPerGroup={1}
                            pagination={{
                                clickable: true,
                            }}
                            scrollbar={true}
                            className="mySwiper"
                            modules={[Scrollbar]}
                            id='new-arrival'
                            breakpoints={{
                                600: {
                                    slidesPerView: 2.5,
                                    slidesPerGroup: 2,
                                    spaceBetween: 0,
                                },
                                768: {
                                    slidesPerView: 3.5,
                                    slidesPerGroup: 3,
                                    spaceBetween: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 2,
                                    spaceBetween: 2,
                                },
                            }}
                        >
                            {
                                arrival.map((singleArrival, index) => (
                                    <SwiperSlide>
                                        <div key={index} className="">
                                            <div className='flex justify-center justify-items-center'>
                                            <img src={singleArrival.img_link} className="search_img" alt="" />
                                            </div>
                                            <p className='text-left text-md h-14 font-sanf'>{singleArrival.title}</p>
                                            <p className='text-left font-gilroybold text-[#121D45] mt-5  lg:pb-5'>BDT. {singleArrival.price}</p>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                {/* Earch End */}
            </div>
            <section className='pt-2 MOBILE-MENU flex lg:hidden bg-transparent z-10 absolute w-full'>
                <div className='HAMBURGER-ICON space-y-2 cursor-pointer px-3'
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                    
                
                </div>
                <div className='HAMBURGER-ICON space-y-2 cursor-pointer px-3 hidden'>
                    <GrClose className="block HAMBURGER-ICON_close   "></GrClose>
                </div>
                
                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div className='Parants_mobile'>
                        <div className='grid grid-cols-3 mobile-nav-mega'>
                            <div className='group pt-2'>
                                <p href="" type="" className='cursor-pointer font-gilroy ml-6'>Shop &darr;</p>
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
                                    <button type="" className='cursor-pointer font-gilroy '>New Arrivals</button>
                                </a>
                            </div>
                            <div className='pt-2 pl-5'>
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
                        className='search-menu-btn bg-transparent cursor-pointer flex px-2'
                        onClick={toggleSearchs}
                    >
                        <IoSearchOutline className='text-2xl text-white home_serch' />
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
                    {/* <Link to="/signin"> */}
                        <label
                            // type="button
                             for="my-modal-3" 
                        className='user-menu-btn cursor-pointer pr-3'>
                        <AiOutlineUser className='home_serch text-white' />
                        </label>
                    <Link to="/cart">
                        <button
                            type="button"
                            className='user-menu-btn cursor-pointer pr-3'>
                            <IoBagOutline className='home_serch text-white' />
                        </button>
                    </Link>
                </div>
                <div className='lg:hidden block'>
                    <button
                        type="button"
                        className='search-menu-btn bg-transparent cursor-pointer flex pr-3'
                        onClick={toggleSearch}
                    >
                        <GiSelfLove className='home_serch text-white' />
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
                <div className=' z-20'>
                    <RightNavbarItems setSer={setSer}/>
                </div>

            </div>
            <div>
            </div>
        </Fragment>
    );
};

export default HomeNav;