import React, { Fragment, lazy } from 'react';
import '../../assets/css/style.css';

// import pages or components
const Sidebar = lazy(() => import('../../components/sidebar/Sidebar.js'));;
const DisplayCenter = lazy(() => import('../../components/display_center/DisplayCenter.js'));
const Navbar = lazy(() => import('../../components/menubar_without_transparent_background/Navbar.js'));
const MobileMenu = lazy(() => import('../../components/mobile_menu/MobileMenu.js'));

const AboutUs = () => {
    return (
        <Fragment>
            <Navbar />
            <MobileMenu />
            <div className='flex mx-auto container h-full pt-20 lg:pt-0 lg:mt-16'>
                <div className='w-1/6 pt-5'>
                    <Sidebar />
                </div>
                <div className='px-5 lg:px-0 md:px-0 lg:w-5/6 md:w-5/6'>
                    <h1 className='text-3xl font-bold py-10 text-center lg:text-left md:text-left'>About Us</h1>
                    <p className='text-center lg:text-left md:text-left'>The story of TAVAAS has just begun.</p>
                    <p className='text-justify'>TAVAAS, the High-End Retailer, is one of the fastest-growing lifestyle brands. TAVAAS’s pioneering and sublime artistic explorations are guided by an ambition to rise globally as the market leader in high-end retail. The novelty of our design innovations is essentially defined by our relentless pursuit of seeking the best for our customers. TAVAAS has set a high standard for what can be achieved through dedication, diligence, and a firm resolution to bring the best to our customers.</p>
                    <br />
                    <p className='text-justify'>As a customer-centric, technology-driven, and visionary brand, TAVAAS is committed to provide customers with high-end products and services that are second to none.</p>
                    <div className='text-center text-4xl p-10'>
                        <i>Our mission is to serve our customers <br />
                            with high-end products and services.</i>
                    </div>
                    <p className='text-justify'>Built on the operational and technological infrastructures of BYSL Global, a next-generation technology conglomerate, TAVAAS has embarked on a journey towards a sustainable business model that would add value to the world and beyond.</p>
                    <br />
                    <p className='text-justify'>The Arabic term ‘TAVAAS’ has no acronym. The term ‘TAVAAS’ means the Highest of the High and refers to the rank of the best believers or the place in heaven where these believers reside. We are committed to living up to this name in everything we do for you.</p>
                </div>
            </div>
            <div className='pt-10'>
                <DisplayCenter />
            </div>
        </Fragment>
    );
};

export default AboutUs;