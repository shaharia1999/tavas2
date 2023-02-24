import React, { Fragment, lazy, Suspense } from 'react';
import '../../assets/css/style.css'
import OtherNav from '../../components/menubar_without_transparent_background/OtherNav';


// import pages or components
const Sidebar = lazy(() => import('../../components/sidebar/Sidebar.js'));
const DisplayCenter = lazy(() => import('../../components/display_center/DisplayCenter.js'));
const Navbar = lazy(() => import('../../components/menubar_without_transparent_background/Navbar.js'));
const MobileMenu = lazy(() => import('../../components/mobile_menu/MobileMenu.js'));

const SizeGide = () => {
    return (
        <Fragment>
            {/* <Navbar /> */}
            <OtherNav></OtherNav>
            <MobileMenu />
            <div className='flex mx-auto  h-full pt-20 lg:pt-0 lg:mt-10'>
                <div className='lg:w-1/6 w-2/6 pt-5'>
                    <Sidebar />
                </div>
                <div className='lg:h-100'>
                    <h1 className='text-2xl font-arial p-6'>Size Gide</h1>
                    <div className='grid grid-cols-5'>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Man</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>WoMan</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Panjabi</p>
                       
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Man</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>WoMan</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Panjabi</p>
                       
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Man</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>WoMan</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Panjabi</p>
                       
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Man</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>WoMan</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Panjabi</p>
                       
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Man</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>WoMan</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Panjabi</p>
                       
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Man</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>WoMan</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Panjabi</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Man</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>WoMan</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Panjabi</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Man</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>WoMan</p>
                        <p className='bg-[#f2f2f2] py-5 px-16 m-4 font-semibold'>Panjabi</p>
                       
                        
                    </div>
                    
                </div>
              
            </div>
            <div className='pt-10'>
                <DisplayCenter />
            </div>
        </Fragment>
    );
};

export default SizeGide;