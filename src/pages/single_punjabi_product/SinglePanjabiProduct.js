import React, { Fragment, lazy, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCartIncrement } from '../../store/actions/AddToCart';
import facebookIcon from '../../assets/social_icons/facebook.png';
import messengerIcon from '../../assets/social_icons/messenger.png';
import whatsappIcon from '../../assets/social_icons/whatsapp.png';
import twitterIcon from '../../assets/social_icons/twitter.png';
import '../../assets/css/style.css';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../../assets/css/style.css"

// Drawer
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import OtherNav from '../../components/menubar_without_transparent_background/OtherNav';

// component and pages
const Navbar = lazy(() => import('../../components/menubar_without_transparent_background/Navbar.js'));
const DeliveryPaymentDrawer = lazy(() => import('../../components/delivery_and_payment_drawer/DeliveryPaymentDrawer.js'));
const SizeDrawer = lazy(() => import('../../components/size_drawer/SizeDrawer.js'));
const ProductDetailsDrawer = lazy(() => import('../../components/product_details_drawer/ProductDetailsDrawer.js'));
const MobileMenu = lazy(() => import('../../components/mobile_menu/MobileMenu.js'));


const SinglePanjabiProduct = () => {
    // Drawer
    // shipping and payment drawer
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)
    const toggleDrawer = () => {
        setIsOpenDrawer((prevState) => !prevState)
    }

    // size drawer
    const [isSizeDrawer, setIsSizeDrawer] = useState(false);
    const toggleSizeDrawer = () => {
        setIsSizeDrawer((prevState) => !prevState)
    }

    // product details drawer
    const [isProductDetailsDrawer, setIsProductDetailsDrawer] = useState(false);
    const toggleProductDetailsDrawer = () => {
        setIsProductDetailsDrawer((prevState) => !prevState)
    }

    const [isOpen, setIsOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

    const location = useLocation()
    console.log(location)

    const CartCount = useSelector((state) => state.count);
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCartIncrement())
    }

    // size dropdown
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <Fragment>
            <OtherNav></OtherNav>
            <MobileMenu />
            <div className='pt-24 lg:pt-0 lg:mt-16 mx-auto px-5 singlePage font-glory'>
                {isOpen && <Lightbox
                    imageTitle={location.state.galleryImages[imgIndex].title}
                    imageCaption={location.state.galleryImages[imgIndex].caption}
                    mainSrc={location.state.galleryImages[imgIndex]}
                    nextSrc={location.state.galleryImages[(imgIndex + 1) % location.state.galleryImages.length]}
                    prevSrc={location.state.galleryImages[(imgIndex + location.state.galleryImages.length - 1) % location.state.galleryImages.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setImgIndex((imgIndex + location.state.galleryImages.length - 1) % location.state.galleryImages.length)}
                    onMoveNextRequest={() => setImgIndex((imgIndex + 1) % location.state.galleryImages.length)}
                />}
                {/* lg:grid-cols-2 */}
                <div className='flex sm:grid-cols-1 pt-3 new-arrival single_parants'>
                    <div className='first-section_parantes_div '>
                        <div className='grid grid-cols-2 first-section'>
                            <img
                                src={location.state.galleryImages?.[0]} alt="gg"
                                className='w-full px-1 h-auto py-1'
                                onClick={() => setIsOpen(true)} />
                            <img
                                src={location.state.galleryImages?.[1]} alt="gg"
                                className='w-full px-1 h-auto py-1'
                                onClick={() => setIsOpen(true)} />
                        </div>
                        <div className='my-5 md:my-10 lg:my-10 border border-none bg-white new-man-product-desc h-auto third-section'>
                            <div className='lg:p-20 md:p-20'>
                                <p className='text-justify font-gilroy'>Relaxed-fit jumper in a knitted blend containing some wool with a round, rib-trimmed neckline, long sleeves and ribbing at the cuffs and hem.</p>
                                <p className='text-sm text-gray-500 leading-10 pt-5 font-gilroy'><span className='font-gilroybold text-black'>Fit -</span> Relaxed fit</p>
                                <p className='text-sm text-gray-500 leading-10 font-gilroy'><span className='font-gilroybold text-black'>Composition -</span> Polyester 60%, Polyamide 35%, Wool 5%</p>
                                <p className='text-sm text-gray-500 leading-10 font-gilroy'><span className='font-gilroybold text-black'>Art. No. -</span> 1074074001</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 fourth-section'>
                            <img
                                src={location.state.galleryImages?.[2]} alt="gg"
                                className='w-full px-1 h-auto py-1'
                                onClick={() => setIsOpen(true)} />
                            <img
                                src={location.state.galleryImages?.[3]} alt="gg"
                                className='w-full px-1 h-auto py-1'
                                onClick={() => setIsOpen(true)} />
                        </div>
                        <div className='grid grid-cols-2 fifth-section'>
                            <img
                                src={location.state.galleryImages?.[4]} alt="gg"
                                className='w-full px-1 h-auto py-1'
                                onClick={() => setIsOpen(true)} />
                            <img
                                src={location.state.galleryImages?.[5]} alt="gg"
                                className='w-full px-1 h-auto py-1'
                                onClick={() => setIsOpen(true)} />
                        </div>
                        <img src={location.state.galleryImages?.[6]} alt="gg"
                            className='w-1/2 px-1 h-auto mx-auto py-1 sixth-section'
                            onClick={() => setIsOpen(true)} />
                    </div>
                    <div className='second-section lg:ml-10  '>
                        <div className='second-section-div'>
                        <p className='text-center font-gilroy text-2xl'>{location.state.product_title}</p>
                        <p className='text-center text-gray-400 font-gilroy'>{location.state.code}</p>
                        <p className='text-center font-gilroybold text-xl'>BDT {location.state.regular_price}</p>
                        {/* multi select size */}
                        <div className="w-64 relative left-1/2 -translate-x-2/4 py-10">
                            <Box>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Size</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Size"
                                        onChange={handleChange}
                                    >
                                        {
                                            location.state.size.map((singleSize, i) => (
                                                <MenuItem value={i}>{singleSize}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>

                        {/* add to bag */}
                        <button type="" className='relative left-1/2 -translate-x-2/4	border border-[#121D45] bg-black mt-3 text-white py-2 w-64 uppercase font-gilroy'
                            onClick={handleAddToCart}
                        >Add to Bag</button>
                        <br />
                        <button type="" className='relative left-1/2 -translate-x-2/4 border border-[#121D45] mt-3 text-[#121D45] py-2 w-64 uppercase font-gilroy'>Find In Store</button>
                        <br />

                        {/* product size */}
                        <button type="" className='relative left-1/2 -translate-x-2/4 border border-[#121D45] mt-3 text-[#121D45] py-2 w-64 uppercase font-gilroy'
                            onClick={toggleSizeDrawer}
                        >Size Guide</button>
                        <Drawer
                            open={isSizeDrawer}
                            onClose={toggleSizeDrawer}
                            direction='right'
                            className='bla bla bla'
                            size={450}
                        >
                            <>
                                <SizeDrawer size={location.state.size} />
                            </>
                        </Drawer>

                        {/* product details */}
                        <button type="" className='relative left-1/2 -translate-x-2/4 border border-[#121D45] mt-3 text-[#121D45] py-2 w-64 uppercase font-gilroy'
                            onClick={toggleProductDetailsDrawer}
                        >Product Details</button>
                        <Drawer
                            open={isProductDetailsDrawer}
                            onClose={toggleProductDetailsDrawer}
                            direction='right'
                            className='bla bla bla'
                            size={450}
                        >
                            <>
                                <ProductDetailsDrawer details={location.state} />
                            </>
                        </Drawer>

                        {/* delivery nd payment section */}
                        <div className='py-3'>
                            <button
                                onClick={toggleDrawer}
                                className='text-center font-gilroybold cursor-pointer relative left-1/2 -translate-x-2/4 mt-4'
                            >
                                Delivery and Payment
                            </button>
                            <Drawer
                                open={isOpenDrawer}
                                onClose={toggleDrawer}
                                direction='right'
                                className='bla bla bla'
                                size={450}
                            >
                                <>
                                    <DeliveryPaymentDrawer />
                                </>
                            </Drawer>
                        </div>

                        <div className='block text-center mt-5' >
                            <div className='inline-block'>
                                <a href="https://www.facebook.com/">
                                    <img src={facebookIcon} className="h-4 w-4 relative m-2" alt="" />
                                </a>
                            </div>
                            <div className='inline-block'>
                                <a href="https://www.messenger.com/">
                                    <img src={messengerIcon} className="h-4 w-4 relative m-2" alt="" />
                                </a>
                            </div>
                            <div className='inline-block'>
                                <a href="https://web.whatsapp.com/">
                                    <img src={whatsappIcon} className="h-4 w-4 relative m-2" alt="" />
                                </a>
                            </div>
                            <div className='inline-block'>
                                <a href="https://twitter.com/">
                                    <img src={twitterIcon} className="h-4 w-4 relative m-2" alt="" />
                                </a>
                            </div>
                        </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SinglePanjabiProduct;