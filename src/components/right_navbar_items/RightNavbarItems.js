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
    // redu
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
                <div className='  right-ber-menu2 z-10 relative '>
                    {/* cart button */}
                    {/* <button
                        type="button"
                        className='shopping-cart-btn float-right text-left w-30  py-3 px-4  cursor-pointer -translate-x-1/2 flex items-center hover:bg-[#141E41] '
                        onClick={toggleDrawer}
                    >
                        <IoBagOutline className='text-2xl right-nav' />
                        <span className='ml-1 pt-1 special'>{CartCount}</span>
                    </button> */}
                    <button
                        type="button"
                        className='search-menu-btn float-right text-left w-30 ml-1 relative bg-transparent   cursor-pointer -translate-x-1/2 flex items-center py-3 px-4 hover:bg-[#141E41]'
                        onClick={() => {
                            setSer((prevState) => !prevState)
                        }}
                    >
                        <IoBagOutline className='text-2xl right-nav' />
                        <span className='ml-1 special'>CART</span>
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
                        <label
                            type="button"
                        for="my-modal"
                        className='user-menu-btn float-right text-left w-30 ml-1 relative bg-transparent py-3 px-4 hover:bg-[#141E41] cursor-pointer -translate-x-1/2 flex items-center  z-50"'>
                            <AiOutlineUser className='text-2xl right-nav' />
                        {/* <span className='ml-1 special ' for="my-modal">SIGN IN</span> */}
                        <label  className='ml-1 special'>SIGN IN</label>
                        </label>
                    {/* </a> */}
                    {/* pop Up */}
                    
                    <button
                        type="button"
                        className='search-menu-btn float-right text-left w-30 ml-1 relative bg-transparent   cursor-pointer -translate-x-1/2 flex items-center py-3 px-4 hover:bg-[#141E41]'
                        onClick={() => {
                            setSer((prevState) => !prevState)
                        }}
                    >
                        <IoSearchOutline className='text-3xl right-nav' />
                        <span className='ml-1 special'>SEARCH</span>
                    </button>
                    <button
                        type="button"
                        className='search-menu-btn float-right text-left w-30  py-3 px-4 ml-1 relative bg-transparent cursor-pointer -translate-x-1/2 flex items-center hover:bg-[#141E41]'
                        onClick={toggleSearch}
                    >
                        <GiSelfLove className='text-2xl right-nav' />
                        <span className='ml-1 special'>WISHLIST</span>
                    </button>
                         {/* modal 1 */}
                    {/* ============================== modal 1 =================================================*/}
                    <input type="checkbox" id="my-modal" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box MODAL-popUP">
                            <h3 class="font-bold  text-center text-white py-5 text-2xl ">Log in</h3>
                            <div className='flex justify-center'>
                                <input type="text" placeholder="Number" class="input input-bordered w-full max-w-xs justify-center" />
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
                            {/* <div class="modal-action ">
                                <label for="my-modal-6" class="btn btn-sm btn-circle absolute left-2 top-2">OTP</label>
                            </div> */}
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
                    {/*======================= modal 2 ==============================================================*/}

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
                    {/*    ==================== model 2  End======================================================== */}
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