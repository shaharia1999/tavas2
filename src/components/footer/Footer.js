import React, { Fragment, lazy, useState } from 'react';
import { MdFacebook } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import '../../assets/css/style.css';

// components or pages
const FooterDropdown = lazy(() => import('./footer_dropdown_component_for_mobilemenu/FooterDropdown.js'));

const Footer = () => {
   
    
    return (
        <Fragment>
            <div className="bottom-0 w-full">
                <div className='footer-content px-16 py-16 block bg-[#121D45]'>
                    <div className='flex justify-center max-w-7xl mx-auto my-auto'>
                        <div className='grid-x grid-margin-x flex flex-wrap'>
                            <div className='company-section w-6/12 lg:w-auto py-5 lg:py-0 mx-0 lg:mx-10'>
                                <div className='footer-context-block'>
                                    <div className='footer-context-title mb-7'>
                                        <p className='font-gilroybold text-white'>Company</p>
                                    </div>
                                    <div className='footer-list-menu'>
                                        <ul className='list-none'>
                                            <li><a href="/about-us" className="text-slate-500 text-md font-gilroy">About Us</a></li>
                                            <li><a href="/contact-us" className="text-slate-500 text-md font-gilroy">Contact Us</a></li>
                                            <li><a href="/intellectual-property" className="text-slate-500 text-md font-gilroy">Intellectual Property</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='company-section w-6/12 lg:w-auto py-5 lg:py-0 mx-0 lg:mx-10'>
                                <div className='footer-context-block'>
                                    <div className='footer-context-title mb-7'>
                                        <p className='font-gilroybold text-white'>Information</p>
                                    </div>
                                    <div className='footer-list-menu'>
                                        <ul className='list-none'>
                                            <li><a href="/" className="text-slate-500 text-md font-gilroy">Exchange & Return</a></li>
                                            <li><a href="/" className="text-slate-500 text-md font-gilroy">Size Guide</a></li>
                                            <li><a href="/" className="text-slate-500 text-md font-gilroy">Loyalty Program</a></li>
                                            <li><a href="/" className="text-slate-500 text-md font-gilroy">Display Center</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='company-section w-6/12 lg:w-auto py-5 lg:py-0 mx-0 lg:mx-10'>
                                <div className='footer-context-block'>
                                    <div className='footer-context-title mb-7'>
                                        <p className='font-gilroybold text-white'>Legal</p>
                                    </div>
                                    <div className='footer-list-menu'>
                                        <ul className='list-none'>
                                            <li><a href="/" className="text-slate-500 text-md font-gilroy">Privacy Policy</a></li>
                                            <li><a href="/payment-policy" className="text-slate-500 text-md font-gilroy">Payment Policy</a></li>
                                            <li><a href="/shipping-policy" className="text-slate-500 text-md font-gilroy">Shipping Policy</a></li>
                                            <li><a href="/terms-conditions" className="text-slate-500 text-md font-gilroy">Terms & Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='company-section w-6/12 lg:w-auto py-5 lg:py-0 mx-0 lg:mx-10'>
                                <div className='footer-context-block'>
                                    <div className='footer-context-title mb-7'>
                                        <p className='font-gilroybold text-white'>Service Center</p>
                                    </div>
                                    <div className='footer-list-menu'>
                                        <ul className='list-none'>
                                            <li><a href="tel:+8809666774577" className="text-slate-500 text-md font-gilroy">09666774577</a></li>
                                            <li><a href="mailto:support@tavaas.global" className="text-slate-500 text-md font-gilroy">support@tavaas.global</a></li>
                                            <li></li>
                                            <li><a href="/terms-conditions" className="text-slate-500 text-md font-gilroy">Terms & Conditions</a></li>
                                        </ul>
                                    </div>
                                    <div className='mt-7'>
                                        <div className='footer-social-icon block'>
                                            <ul className='list-none flex'>
                                                <li className='pr-3'>
                                                    <a href="/" className='text-2xl'><MdFacebook color="white" /></a>
                                                </li>
                                                <li className='pr-3'>
                                                    <a href="/" className='text-2xl'><BsInstagram color="white" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* dropdown footer */}
                            <div className='lg:hidden pb-5'>
                                <FooterDropdown />
                            </div>
                            <div className='w-6/12 lg:w-auto py-0 lg:py-0 mx-0 lg:mx-10'>
                                <div className='footer-context-block'>
                                    <div className='footer-context-title  mb-7'>
                                        <p className='font-gilroybold text-white pl-1'>You can pay by</p>
                                    </div>
                                    <div className='footer-list-menu '>
                                        <ul className='list-none flex flex-wrap w-44'>
                                            <li className="mb-5 flex-[33.33%] lg:flex-[50%] p-1 lg:p-0">
                                                <img src="https://kx-ilyn-shop-s3.s3.amazonaws.com/static/images/payment/footer-payment/visa.svg" alt="" />
                                            </li>
                                            <li className="mb-5 flex-[33.33%] lg:flex-[50%] p-1 lg:p-0">
                                                <img src="https://kx-ilyn-shop-s3.s3.amazonaws.com/static/images/payment/footer-payment/mastercard.svg" alt="" />
                                            </li>
                                            <li className="mb-5 flex-[33.33%] lg:flex-[50%] p-1 lg:p-0">
                                                <img src="https://kx-ilyn-shop-s3.s3.amazonaws.com/static/images/payment/footer-payment/ae.svg" alt="" />
                                            </li>
                                            <li className="mb-5 flex-[33.33%] lg:flex-[50%] p-1 lg:p-0">
                                                <img src="https://kx-ilyn-shop-s3.s3.amazonaws.com/static/images/payment/footer-payment/bkash.svg" alt="" />
                                            </li>
                                            <li className="mb-5 flex-[33.33%] lg:flex-[50%] p-1 lg:p-0">
                                                <img src="https://kx-ilyn-shop-s3.s3.amazonaws.com/static/images/payment/footer-payment/nagad.svg" alt="" />
                                            </li>
                                            <li className="mb-5 flex-[33.33%] lg:flex-[50%] p-1 lg:p-0">
                                                <img src="https://kx-ilyn-shop-s3.s3.amazonaws.com/static/images/payment/footer-payment/rocket.svg" alt="" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* copyright section */}
                <div className=''>
                    <ul className='align-center footer-copyright bg-black text-white py-5'>
                        <li className='flex justify-center font-gilroy pl-3'>
                            © 2023 TAVAAS. Made with ❤️ by TechAByte Solutions
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;