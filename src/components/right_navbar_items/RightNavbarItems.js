import React, { Fragment, lazy, useState } from 'react';
import { IoSearchOutline, IoBagOutline,  } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useSelector } from 'react-redux';


const CartDrawer = lazy(() => import('../../components/cart_drawer/CartDrawer.js'));
const SearchDrawer = lazy(() => import('../../components/search_drawer/SearchDrawer.js'));

const RightNavbarItems = (props) => {
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
                    <a href="/signin">
                        <button
                            type="button"
                            className='user-menu-btn float-right text-left w-30 ml-6 relative bg-transparent cursor-pointer -translate-x-1/2 flex items-center'>
                            <AiOutlineUser className='text-2xl right-nav' />
                            <span className='ml-1 special'>SIGN IN</span>
                        </button>
                    </a>
                    <button
                        type="button"
                        className='search-menu-btn float-right text-left w-20 ml-6 relative bg-transparent cursor-pointer -translate-x-1/2 flex items-center'
                        onClick={toggleSearch}
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