import React, { Fragment } from 'react';
import { BiArrowToBottom, BiDownArrow } from "react-icons/bi";
import { SlArrowDown } from 'react-icons/sl';

const FooterDropdown = () => {
    return (
        <Fragment>
            <div className="flex flex-col w-[72]  font-gilroy ">
                <div className='relative w-[400px] overflow-hidden '>
                    <input type="checkbox"
                    className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 cursor-pointer
                    '></input>
                <div className=' h-12 w-full  flex items-center pl-4'>
                        <h1 className='text-lg font-semibold text-white '>Company</h1>
                </div>
                <div className='
                absolute top-3 right-3 tex-white transition-transform duration-500 rotate-0 peer-checked:rotate-180
                 '>
                    {/* aroow */}
                        <SlArrowDown className='text-white'></SlArrowDown>
                      
                </div>
                {/* Content */}
                    <div className=' text-[#59737E] transition-all duration-500 max-h-0 peer-checked:max-h-80'>
                        <div className='py-4 px-3 pl-2'>
                           <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Intellectual Property</li>
                           </ul>
                    </div>
                </div>
              
                   

                </div>
               
            </div>
            <div className="flex flex-col w-72 gap-6 font-gilroy">
                <div className='relative w-[400px] overflow-hidden'>
                    <input type="checkbox"
                    className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 cursor-pointer
                    '></input>
                <div className=' h-12 w-full  flex items-center'>
                        <h1 className='text-lg font-semibold text-white pl-4'>Information</h1>
                </div>
                <div className='
                absolute top-3 right-3 tex-white transition-transform duration-500 rotate-0 peer-checked:rotate-180
                 '>
                    {/* aroow */}
                        <SlArrowDown className='text-white'></SlArrowDown>
                      
                </div>
                {/* Content */}
                    <div className=' text-[#59737E] transition-all duration-500 max-h-0 peer-checked:max-h-80'>
                        <div className='py-4 pl-2'>
                           <ul>
                            <li>Exchange & Return</li>
                                <li>Exchange & Return</li>
                                <li>Size Guide</li>
                                <li>Loyalty Program</li>
                                <li>Display Center</li>
                           </ul>
                    </div>
                </div>
              
                   

                </div>
               
            </div>
            <div className="flex flex-col w-72 gap-6 font-gilroy">
                <div className='relative w-[400px] overflow-hidden'>
                    <input type="checkbox"
                    className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 cursor-pointer
                    '></input>
                <div className=' h-12 w-full  flex items-center'>
                        <h1 className='text-lg font-semibold text-white pl-4'>Legal</h1>
                </div>
                <div className='
                absolute top-3 right-3 tex-white transition-transform duration-500 rotate-0 peer-checked:rotate-180
                 '>
                    {/* aroow */}
                        <SlArrowDown className='text-white'></SlArrowDown>
                      
                </div>
                {/* Content */}
                    <div className=' text-[#59737E] transition-all duration-500 max-h-0 peer-checked:max-h-80'>
                        <div className='py-4 pl-2'>
                           <ul>
                                <li>Legal</li>
                                <li>Privacy Policy</li>
                                <li>Payment Policy</li>
                                <li>Shipping Policy</li>
                                <li>Terms & Conditions</li>
                           </ul>
                    </div>
                </div>
              
                   

                </div>
               
            </div>
            <div className="flex flex-col w-72 gap-6 font-gilroy">
                <div className='relative w-[400px] overflow-hidden'>
                    <input type="checkbox"
                    className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 cursor-pointer
                    '></input>
                <div className=' h-12 w-full  flex items-center'>
                        <h1 className='text-lg font-semibold text-white pl-4'>Service Center</h1>
                </div>
                <div className='
                absolute top-3 right-3 tex-white transition-transform duration-500 rotate-0 peer-checked:rotate-180
                 '>
                    {/* aroow */}
                        <SlArrowDown className='text-white'></SlArrowDown>
                      
                </div>
                {/* Content */}
                    <div className=' text-[#59737E] transition-all duration-500 max-h-0 peer-checked:max-h-80'>
                        <div className='py-4 pl-2'>
                           <ul>
                                <li>09666774577</li>
                                <li>support@tavaas.global</li>
                                <li>Terms & Conditions</li>

                           </ul>
                    </div>
                </div>
              
                   

                </div>
               
            </div>


        </Fragment>
    );
};

export default FooterDropdown;