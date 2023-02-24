import React, { Fragment, lazy } from 'react';
import { IoMdCall } from 'react-icons/io';
import { IoMailSharp, IoLocationSharp } from 'react-icons/io5';
import '../../assets/css/style.css'
import OtherNav from '../../components/menubar_without_transparent_background/OtherNav';


// import pages or components
const DisplayCenter = lazy(() => import('../../components/display_center/DisplayCenter.js'));
const Navbar = lazy(() => import('../../components/menubar_without_transparent_background/Navbar.js'));
const MobileMenu = lazy(() => import('../../components/mobile_menu/MobileMenu.js'));

const Contact = () => {
    return (
        <Fragment>
            <OtherNav></OtherNav>
            <MobileMenu />
            <div className='grid grid-cols-2 gap-4 container mx-auto pt-24 lg:pt-0 px-10 lg:px-56 mt-8'>
                <div>
                    {/* Call section */}
                    <div className='flex flex-row place-items-center'>
                        <IoMdCall className='text-xl lg:text-2xl' />
                        <p className='pl-5 text-xl lg:text-2xl font-gilroy'>Call to Us:</p>
                    </div>
                    <p>We're available from 10.00 AM–10.00 PM</p>
                    <p className='font-bold pt-8'>Customer Service:</p>
                    <a href="tel:+09666774577">09666774577</a>
                    <hr className='w-full lg:w-4/6 my-8' />
                    {/* Mail section */}
                    <div className='flex flex-row place-items-center '>
                        <IoMailSharp className='text-xl lg:text-2xl' />
                        <p className='pl-5 text-xl lg:text-2xl'>Write to Us:</p>
                    </div>
                    <p>Fill out our form and we will get in touch with you.</p>
                    <p className='font-bold pt-8'>Customer Service:</p>
                    <a href="mailto:support@ilyn.global">support@ilyn.global</a>
                    <hr className='w-4/6 my-8' />

                    {/* Location section */}
                    <div className='flex flex-row place-items-center '>
                        <IoLocationSharp className='text-xl lg:text-2xl' />
                        <p className='pl-5 text-xl lg:text-2xl'>Find Us:</p>
                    </div>
                    <p>Want to visit our Display Centers?</p>
                    <a href="/panjabis" className='font-bold mb-8'>Display Center Locator</a>
                </div>
                <div>
                    <p className='text-xl lg:text-3xl font-normal'>Leave US a Message</p>
                    <form>
                        {/* Name field */}
                        <label htmlFor="id_name">
                            <input
                                id='id_name'
                                className='border border-solid border-[#cacaca] w-full mt-8 py-6 px-3 h-14 focus:outline-[#cacaca]'
                                type="text"
                                name="name"
                                placeholder='Name*'
                                required />
                        </label>
                        {/* Mail field */}
                        <label htmlFor="id_mail">
                            <input
                                id='id_mail'
                                className='border border-solid border-[#cacaca] w-full mt-4 py-6 px-3 h-14 focus:outline-[#cacaca]'
                                type="mail"
                                name="mail"
                                placeholder='Email*'
                                required />
                        </label>

                        {/* Number field */}
                        <label htmlFor="id_number">
                            <input
                                id='id_number'
                                className='border border-solid border-[#cacaca] w-full mt-4 py-6 px-3 h-14 focus:outline-[#cacaca]'
                                type="tel"
                                name="number"
                                placeholder='Phone Number*'
                                required />
                        </label>
                        {/* Message field */}
                        <label htmlFor="id_message">
                            <input
                                id='id_message'
                                className='border border-solid border-[#cacaca] w-full mt-4  px-3 h-36 focus:outline-[#cacaca]'
                                type="text"
                                name="text"
                                placeholder='Your Message'
                            />
                        </label>
                        <button type="submit" className='border bg-black mt-3 text-white px-8 py-5 w-full lg:w-64 font-gilroy'>Send Message</button>
                    </form>
                </div>
            </div>
            <div className='pt-10'>
                <DisplayCenter />
            </div>
        </Fragment>
    );
};

export default Contact;