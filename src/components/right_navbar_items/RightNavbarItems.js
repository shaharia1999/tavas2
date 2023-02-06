import React, { Fragment, lazy, useState } from 'react';
import { IoSearchOutline, IoBagOutline, IoCloseOutline,  } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { ImGoogle } from "react-icons/im";
import { AiFillFacebook, AiOutlineUser } from "react-icons/ai";
// import { FiFacebook } from "react-icons/fi";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useSelector } from 'react-redux';
import "../../assets/css/style.css"



const CartDrawer = lazy(() => import('../../components/cart_drawer/CartDrawer.js'));
const SearchDrawer = lazy(() => import('../../components/search_drawer/SearchDrawer.js'));

const RightNavbarItems = (props) => {
    const {setSer}=props;
    // redux
    const CartCount = useSelector((state) => state.count);
  
    // Drawer
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const [search, setSearch] = useState(false);
    const toggleSearch = () => {
        setSearch((prevState) => !prevState)
    }
    // const [ser, setSer] = useState(false);
    // const toggleSearchs = () => {
    //     setSer((prevState) => !prevState)
    // }
    // console.log(ser)
    // serch_div
    return (
        <Fragment>
      
            <div className='top-bar-container '>


                {/* site logo */}
                <div className='top-bar top-10 left-8 relative w-full z-10'>
                    {/* cart button */}
                    <button
                        type="button"
                        className='shopping-cart-btn float-right text-left w-20 ml-6 cursor-pointer -translate-x-1/2 flex items-center  '
                        onClick={toggleDrawer}
                    >
                        <IoBagOutline className='text-2xl right-nav' />
                        <span className='ml-1 special'>{CartCount}</span>
                    </button>
                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction='right'
                        className='bla bla bla'
                        size={450}
                    >
                        <>
                            <CartDrawer />
                        </>
                    </Drawer>
                    {/* <a href="/signin"> */}
                        <button
                            type="button"
                            className='user-menu-btn float-right text-left w-30 ml-6 relative bg-transparent cursor-pointer -translate-x-1/2 flex items-center  z-50"'>
                            <AiOutlineUser className='text-2xl right-nav' />
                        {/* <span className='ml-1 special ' for="my-modal">SIGN IN</span> */}
                        <label for="my-modal" className='ml-1 special'>SIGN IN</label>
                        </button>
                    {/* </a> */}
                    {/* pop Up */}
                    
                    <button
                        type="button"
                        className='search-menu-btn float-right text-left w-20 ml-6 relative bg-transparent cursor-pointer -translate-x-1/2 flex items-center'
                        onClick={() => {
                            setSer((prevState) => !prevState)
                        }}
                    >
                        <IoSearchOutline className='text-3xl right-nav' />
                        <span className='ml-1 special'>SEARCH</span>
                    </button>
                    <button
                        type="button"
                        className='search-menu-btn float-right text-left w-30px ml-6 relative bg-transparent cursor-pointer -translate-x-1/2 flex items-center'
                        onClick={toggleSearch}
                    >
                        <GiSelfLove className='text-2xl right-nav' />
                        <span className='ml-1 special'>WISHLIST</span>
                    </button>
                         {/* modal 1 */}
                        <input type="checkbox" id="my-modal" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box MODAL-popUP">
                                <h3 class="font-bold  text-center text-white py-5 text-2xl ">Log in</h3>
                            <div className='flex justify-center'>
                                <input type="text" placeholder="Number/email" class="input input-bordered w-full max-w-xs justify-center" />
                            </div>
                            <div class='flex justify-center pt-10  '>
                                {/* <button className='btn block text-center px-24'>cuntinue</button> */}
                                <label for="my-modal-6 " className='btn block text-center px-24 py-3 space-x-2 text-1xl'>cuntinue</label>
                               </div>
                              
                               <div className='flex mt-10 relative'>
                                <hr className='bg-red-500 w-48 mt-4'></hr>
                                <p className='w-20 justify-center text-center  absolute ml-48 mb-20 text-2xl'>or</p>
                                <hr className='bg-red-500 w-64 mt-4'></hr>
                               </div>
                                <div class="modal-action ">
                                <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                </div>
                                <div class="modal-action ">
                                <label for="my-modal-6" class="btn btn-sm btn-circle absolute left-2 top-2">OTP</label>
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
                        {/* modal 2 */}
                    {/* <label for="my-modal-6" class="btn">open modal</label> */}
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box MODAL-popUP1">
                            <h3 class="font-bold  text-center  py-5 text-2xl ">Log in</h3>
                            <h6 class="font-bold  text-center py-5 text-2xl ">Please enter the One Time Password (OTP)
                                sent via Email and SMS to 01707018322</h6>
                            <div className='flex justify-center'>
                                <input type="text" placeholder="Otp" class="input input-bordered w-full max-w-xs justify-center" />
                            </div>
                            <div class='flex justify-center pt-10  '>
                                {/* <button className='btn block text-center px-24'>cuntinue</button> */}
                                <p>Didn’t receive the OTP? RESEND</p>
                            </div>
                            <div class='flex justify-center pt-10 '>
                                <button className='btn block text-center px-24'>Log in</button>
                            </div>

                            <div className='flex mt-10 relative'>
                             
                                <p className=' justify-center text-center  text-2xl'>For customers outside Bangladesh, please check email for OTP</p>

                            </div>
                            <div class="modal-action ">
                                <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-5">✕</label>
                            </div>

                        </div>
                </div>

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
 
            </div>
        </Fragment>
    );
};

export default RightNavbarItems;