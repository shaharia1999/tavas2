import axios from 'axios';
import React, { Fragment, lazy, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/menubar_without_transparent_background/Navbar.js';
import FilterSortDrawer from '../../components/filters_and_sort_drawer/FilterSortDrawer.js';
import MobileMenu from '../../components/mobile_menu/MobileMenu.js';
// Drawer
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import OtherNav from '../../components/menubar_without_transparent_background/OtherNav.js';
import "../../assets/css/style.css"
import { GiSelfLove } from 'react-icons/gi';
// import HomeNav from '../home_page/HomeNav.js';



const PanjabiProducts = () => {
    const [panjabi, setPanjabi] = useState([]);

    useEffect(() => {
        axios
            .get("/data/panjabi_products.json")
            .then((res) => setPanjabi(res.data))
            .catch((err) => console.log(err))
    }, [])

    const [sortState, setSortState] = useState("none");
    const sortMethods = {
        none: { method: (a, b) => null },
        ascending: { method: (a, b) => (a.price > b.price ? -1 : 1) }, //low to high
        descending: { method: (a, b) => (a.price > b.price ? 1 : -1) } // high to low
    }

    // Filters and sort drawer
    const [isOpenFilterSortDrawer, setIsOpenFilterSortDrawer] = useState(false);
    const toggleIsFilterSortDrawer = () => {
        setIsOpenFilterSortDrawer((prevState) => !prevState)
    }


    return (
        <Fragment>
            {/* <Navbar /> */}
            <OtherNav/>
            <MobileMenu />
            {/* <HomeNav></HomeNav> */}
            <h1 className='text-center text-3xl font-semibold pt-5 cetagory_title'>This Is Shop</h1>
            <div className='grid grid-cols-2'>
                <div className='mx-5'>
                    <h1 className='text-left mt-16 text-sm special_otehr_nav'>Home | Shop </h1>
                </div>
                <div className='mx-5 text-right sort-price'>
                    <button type="" className='mt-16 special_otehr_nav' onClick={toggleIsFilterSortDrawer}>Filters & Sort</button>
                    {/* FilterSortDrawer */}
                    <Drawer
                        open={isOpenFilterSortDrawer}
                        onClose={toggleIsFilterSortDrawer}
                        direction='right'
                        className='bla bla bla'
                        size={450}
                    >
                        <>
                            <FilterSortDrawer />
                        </>
                    </Drawer>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-2 pb-5 mx-5">
                {
                    panjabi
                        .sort(sortMethods[sortState].method)
                        .map((data, index) => {
                            const { id, product_title, category, code, color, images, size, description, details, material, care, stock_status, regular_price, sale_price, galleryImages } = data;
                            return (
                                <div key={index} className='panjabisProducts'>
                                    <Link to={`/panjabis/${data.id}`}
                                        state={{ id, product_title, category, code, color, images, size, description, details, material, care, stock_status, regular_price, sale_price, galleryImages }}
                                    >  <div className='panjabisProducts_img-dev '>
                                        <img
                                            className=''
                                            src={data.images[0]}
                                            onMouseEnter={(e) => e.target.src = data.images[1]}
                                            onMouseLeave={(e) => e.target.src = data.images[0]}
                                            alt="" />
                                        </div>
                                        <button className='wish_love'>
                                        <GiSelfLove className='text-2xl text-black bg-white' />
                                        </button>
                                        <button className='sale'>
                                        {/* <GiSelfLove className='text-2xl text-black bg-white' /> */}
                                        <p>Sale</p>
                                        </button>
                                        <h1 className='lg:text-left md:text-left text-center font-gilroybold'><a href="/panjabis">{data.product_title}</a></h1>
                                        <p className='text-inherit font-semibold lg:text-left md:text-left text-center'>Product Code: {data.code}</p>
                                        <p className='lg:text-left md:text-left text-center font-gilroybold'>BDT: {data.regular_price}</p>
                                    </Link>
                                </div>
                            )
                        })
                }
            </div>
        </Fragment>
    );
};

export default PanjabiProducts;