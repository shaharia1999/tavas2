import React, { Fragment, lazy, useState } from 'react';
import { IoSearchOutline, IoBagOutline, IoCloseOutline, } from "react-icons/io5";
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

const OtherRight = (props) => {
    const { setSer } = props;
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

            <div className='top-bar-container  '>
                {/* site logo */}
                <div className='  right-ber-menu2_other z-10 relative '>
                
                    <button
                        type="button"
                        className='search-menu-btn float-right text-left w-30 ml-1  relative bg-transparent cursor-pointer -translate-x-1/2 flex items-center py-3 px-4  hover:bg-[#E9EBEC]'
                        onClick={() => {
                            setSer((prevState) => !prevState)
                        }}
                    >
                        <IoBagOutline className='text-2xl right-nav-Other' />
                        <span className='ml-1 special_otehr_nav'>CART</span>
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
                        className='user-menu-btn float-right text-left w-30 ml-1 relative bg-transparent cursor-pointer -translate-x-1/2 flex items-center hover:bg-[#E9EBEC]  z-50 py-3 px-4 '>
                        <AiOutlineUser className='text-2xl right-nav-Other' />
                        {/* <span className='ml-1 special ' for="my-modal">SIGN IN</span> */}
                        <label  className='ml-1 special_otehr_nav'>SIGN IN</label>
                    </label>
                    {/* </a> */}
                    {/* pop Up */}

                    <button
                        type="button"
                        className='search-menu-btn float-right text-left w-30 ml-1  relative bg-transparent cursor-pointer -translate-x-1/2 flex items-center py-3 px-4  hover:bg-[#E9EBEC]'
                        onClick={() => {
                            setSer((prevState) => !prevState)
                        }}
                    >
                        <IoSearchOutline className='text-3xl right-nav-Other' />
                        <span className='ml-1 special_otehr_nav'>SEARCH</span>
                    </button>
                    <button
                        type="button"
                        className='search-menu-btn float-right text-left  w-30 ml-1 relative bg-transparent cursor-pointer -translate-x-1/2 flex items-center py-3 px-4  hover:bg-[#E9EBEC]'
                        onClick={toggleSearch}
                    >
                        <GiSelfLove className='text-2xl right-nav-Other' />
                        <span className='ml-1 special_otehr_nav'>WISHLIST</span>
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

            </div>
        </Fragment>
    );
};

export default OtherRight;