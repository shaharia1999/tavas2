// import React, { Fragment, lazy, useState } from 'react';
// import '../../assets/css/style.css'
// import siteLogoDarkMobile from '../../assets/images/logo/T Black mobile.png';
// import 'react-modern-drawer/dist/index.css'
// import { Link } from 'react-router-dom';
// import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
// import { AiOutlineUser } from "react-icons/ai";
// import Drawer from 'react-modern-drawer'
// import 'react-modern-drawer/dist/index.css'
// import Megamenu1 from '../../assets/megamenu_images/megamenu1.webp'
// import Megamenu2 from '../../assets/megamenu_images/megamenu2.webp'

// // import pages or components
// const SearchDrawer = lazy(() => import('../../components/search_drawer/SearchDrawer.js'));

// const MobileMenu = () => {
//     const [isNavOpen, setIsNavOpen] = useState(false);

//     const [search, setSearch] = useState(false);
//     const toggleSearch = () => {
//         setSearch((prevState) => !prevState)
//     }
//     return (
//         <Fragment>
//             <section className='pt-2 MOBILE-MENU flex lg:hidden bg-transparent absolute w-full'>
//                 <div className='HAMBURGER-ICON space-y-2 cursor-pointer px-3'
//                     onClick={() => setIsNavOpen((prev) => !prev)}
//                 >
//                     <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
//                     <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
//                     <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                  
//                 </div>
//                 <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
//                     <div
//                         className="absolute top-0 right-0 mx-8 my-8 cursor-pointer border-2 rounded-lg"
//                         onClick={() => setIsNavOpen(false)}
//                     >
//                         <svg
//                             className="h-8 w-8 text-gray-600"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         >
//                             <line x1="18" y1="6" x2="6" y2="18" />
//                             <line x1="6" y1="6" x2="18" y2="18" />
//                         </svg>
//                     </div>
//                     <div>
//                         <div className='grid grid-cols-3 gap-2'>
//                             <div className='group px-4'>
//                                 <a href="/" type="" className='cursor-pointer font-gilroy'>Shop &darr;</a>
//                                 <div className='hidden group-hover:flex flex-col absolute left-0 p-10 w-screen bg-white text-black duration-300 mt-0 lg:mt-6 font-gilroy'>
//                                     <div className='grid grid-cols-1 gap-5'>
//                                         <div className='flex flex-col border-black border-b-2'>
//                                             <h3 className='mb-2 lg:mb-4 text-xl text-gray-600 font-gilroybold'>Categories</h3>
//                                             <a href="/" class="hover:underline hover:text-red-600 text-sm ">New Arrival</a>
//                                             <a href="/" class="hover:underline hover:text-red-600 text-sm ">Panjabi</a>
//                                             <a href="/" class="hover:underline hover:text-red-600 text-sm ">New Arrival</a>
//                                             <a href="/" class="hover:underline hover:text-red-600 text-sm ">New Arrival</a>
//                                         </div>
//                                         <div className='flex flex-col border-black border-b-2'>
//                                             <h3 className='mb-2 lg:mb-4 text-xl text-gray-600 font-gilroybold'>Size Guides</h3>
//                                             <a href="/" class="hover:underline hover:text-red-600 text-sm ">Panjabis</a>
//                                             <a href="/" class="hover:underline hover:text-red-600 text-sm ">Shirts</a>
//                                             <a href="/" class="hover:underline hover:text-red-600 text-sm ">Pants</a>
//                                         </div>
//                                         <div className='flex flex-col border-black'>
//                                             <img src={Megamenu1} className="h-96 w-96" alt="" />
//                                         </div>
//                                         <div className='flex flex-col'>
//                                             <img src={Megamenu2} className="h-96 w-96" alt="" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='px-4'>
//                                 <a href="/all-new-panjabis">
//                                     <button type="" className='cursor-pointer font-gilroy'>New Arrivals</button>
//                                 </a>
//                             </div>
//                             <div className='px-4'>
//                                 <a href="/panjabis">
//                                     <button type="" className='cursor-pointer font-gilroy'>Clothing</button>
//                                 </a>
//                             </div>
//                         </div>
//                         <ul>
//                             {/* <li className='py-4 text-center'>
//                                 <a href="/">
//                                     <button type="" className='cursor-pointer font-gilroy'>Winter Collection</button>
//                                 </a>
//                             </li> */}
//                             <li className='py-4 text-center'>
//                                 {/* <a href="/all-new-panjabis">
//                                     <button type="" className='cursor-pointer font-gilroy'>New Arrivals</button>
//                                 </a> */}
//                             </li>
//                             <li className='py-4 text-center'>
//                                 {/* <a href="/panjabis">
//                                     <button type="" className='cursor-pointer font-gilroy'>Clothing</button>
//                                 </a> */}
//                             </li>
//                             <li className='group py-4 text-center'>
//                                 {/* <a href="/" type="" className='cursor-pointer font-gilroy'>Shop &darr;</a>
//                                 <div className='hidden group-hover:flex flex-col absolute left-0 p-10 w-screen bg-white text-black duration-300 mt-0 lg:mt-6 font-gilroy'>
//                                     <div className='grid grid-cols-4 gap-5'>
//                                         <div className='flex flex-col border-r-2 border-black'>
//                                             <h3 className='mb-2 lg:mb-4 text-sm lg:text-xl md:text-xl'>Categories</h3>
//                                             <a href="/" class="hover:underline hover:text-red-600 text-sm lg:text-xl md:text-xl">New Arrival</a>
//                                             <a href="/" class="hover:underline hover:text-red-600 text-sm lg:text-xl md:text-xl">Panjabi</a>
//                                             <a href="/" class="hover:underline hover:text-red-600 text-sm lg:text-xl md:text-xl">New Arrival</a>
//                                             <a href="/" class="hover:underline hover:text-red-600 text-sm lg:text-xl md:text-xl">New Arrival</a>
//                                         </div>
//                                         <div className='flex flex-col border-r-2 border-black'>
//                                             <h3 className='mb-2 lg:mb-4 text-sm lg:text-xl md:text-xl'>Size Guides</h3>
//                                             <a href="/" class="hover:underline hover:text-red-600 text-sm lg:text-xl md:text-xl">Panjabis</a>
//                                             <a href="/" class="hover:underline hover:text-red-600 text-sm lg:text-xl md:text-xl">Shirts</a>
//                                             <a href="/" class="hover:underline hover:text-red-600 text-sm lg:text-xl md:text-xl">Pants</a>
//                                         </div>
//                                         <div className='flex flex-col border-r-2 border-black'>
//                                             <img src={Megamenu1} className="h-28 w-20" alt="" />
//                                         </div>
//                                         <div className='flex flex-col'>
//                                             <img src={Megamenu2} className="h-28 w-20" alt="" />
//                                         </div>
//                                     </div>
//                                 </div> */}
//                             </li>
//                             <li className='py-4 text-center'>
//                                 {/* <a href="/">
//                                     <button type="" className='cursor-pointer font-gilroy'>New Arrivals</button>
//                                 </a> */}
//                             </li>
//                             <li className='py-4 text-center'>
//                                 {/* <a href="/">
//                                     <button type="" className='cursor-pointer font-gilroy'>Clothing</button>
//                                 </a> */}
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className='lg:hidden block'>
//                     <button
//                         type="button"
//                         className='search-menu-btn bg-transparent cursor-pointer flex px-3'
//                         onClick={toggleSearch}
//                     >
//                         <IoSearchOutline className='text-2xl' />
//                     </button>
//                     <Drawer
//                         open={search}
//                         onClose={toggleSearch}
//                         direction='right'
//                         className='bla bla bla'
//                         size={330}
//                     >
//                         <>
//                             <SearchDrawer />
//                         </>
//                     </Drawer>
//                 </div>
//                 <div className='lg:hidden'>
//                     <Link to="/">
//                         <img src={siteLogoDarkMobile}
//                             alt="website logo"
//                             className='h-16 absolute left-2/4 -translate-x-2/4 top-0 z-10'
//                         />
//                     </Link>
//                 </div>
//                 <div className='lg:hidden flex mr-0 ml-auto'>
//                     <Link to="/signin">
//                         <button
//                             type="button"
//                             className='user-menu-btn cursor-pointer pr-3'>
//                             <AiOutlineUser className='text-2xl' />
//                         </button>
//                     </Link>
//                     {/* cart page */}
//                     <Link to="/cart">
//                         <button
//                             type="button"
//                             className='user-menu-btn cursor-pointer pr-3'>
//                             <IoBagOutline className='text-2xl' />
//                         </button>
//                     </Link>
//                 </div>
//             </section>
//         </Fragment>
//     );
// }

// export default MobileMenu;