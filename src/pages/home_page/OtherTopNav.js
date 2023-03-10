// import React from 'react';
import React, { Fragment } from 'react';
import '../../assets/css/style.css'
import Megamenu1 from '../../assets/megamenu_images/megamenu1.webp'
import { SlArrowDown } from "react-icons/sl";
import Megamenu2 from '../../assets/megamenu_images/megamenu2.webp'

const OtherTopNav = () => {
    return (
        <Fragment>

            <div className='top-bar-menu w-full  bg-transparent overflow-y-hidden z-10 block relative mt-0 ml-2 ' id="navbar-solid-bg">
                <ul className='menu justify-center h-auto flex-wrap flex-row p-0 m-0 relative list-none flex'>
                    <li className='flex justify-between px-2  pt-8 '>
                        <a href="/panjabis" className='bg-transparent hover:bg-[#E9EBEC]'>
                            <button type="" className='cursor-pointer  special_otehr_nav '>CLOTH &</button>
                        </a>
                        <SlArrowDown className='text-white ml-2 mt-1 font-semibold bg-transparent'></SlArrowDown>
                    </li>
                    <li className='flex justify-between px-2  pt-8 group'>
                        {/* shop-btn */}
                        <div className='bg-transparent hover:bg-[#E9EBEC]'>
                            <button type="" className='cursor-pointer special_otehr_nav '>SHOP </button>
                            <SlArrowDown className='text-black text-[20px] ml-1  font-semibold '></SlArrowDown>
                        </div>
                        <SlArrowDown className='text-white ml-2 mt-1 font-semibold bg-transparent'></SlArrowDown>
                        <div className='hidden group-hover:flex flex-col absolute left-[-133px] top-24 p-10 w-screen bg-white text-black duration-300 mt-3 font-gilroy h-[65vh]'>
                            <div className='grid grid-cols-4 gap-5'>
                                <div className='flex flex-col border-r-2 border-black'>
                                    <h3 className=' text-xl'>Categories</h3>
                                    <a href="/" class="hover:underline hover:text-red-600">New Arrival</a>
                                    <a href="/" class="hover:underline hover:text-red-600">Panjabi</a>
                                    <a href="/" class="hover:underline hover:text-red-600">New Arrival</a>
                                    <a href="/" class="hover:underline hover:text-red-600">New Arrival</a>
                                </div>
                                <div className='flex flex-col border-r-2 border-black'>
                                    <h3 className=' text-xl'>Size Guides</h3>
                                    <a href="/" class="hover:underline hover:text-red-600">Panjabis</a>
                                    <a href="/" class="hover:underline hover:text-red-600">Shirts</a>
                                    <a href="/" class="hover:underline hover:text-red-600">Pants</a>
                                </div>
                                <div className='flex flex-col border-r-2 border-black'>
                                    <img src={Megamenu1} className="h-[100%] w-96" alt="" />
                                </div>
                                <div className='flex flex-col'>
                                    <img src={Megamenu2} className="h-[100%] w-96" alt="" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='flex justify-between px-2  pt-8 '>
                        <button type="" className='cursor-pointer 	special_otehr_nav hover:bg-[#E9EBEC]'>ACCESSORIES  </button>
                        <SlArrowDown className='text-white ml-2 mt-1 font-semibold bg-transparent'></SlArrowDown>
                    </li>


                    {/* <li className='flex justify-center px-5 font-bold pt-8'>
                        <button type="" className='cursor-pointer font-gilroy'>Sale</button>
                    </li> */}
                </ul>
            </div>
        </Fragment>
    );
};

export default OtherTopNav;