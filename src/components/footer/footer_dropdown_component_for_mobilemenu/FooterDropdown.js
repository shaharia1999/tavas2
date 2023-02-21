import React, { Fragment } from 'react';
import { useState } from 'react';
import { BiArrowToBottom, BiDownArrow } from "react-icons/bi";
import { SlArrowDown } from 'react-icons/sl';

const FooterDropdown = () => {
    const [checked, setChecked] = useState(false)
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
 
    return (
        <Fragment>
            <div className="flex flex-col w-[72]  font-gilroy ">
                <div className='relative w-[400px] overflow-hidden '>
                    <input type="checkbox"
                    className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 cursor-pointer
                    '></input>
               
                    <div className=' h-12   flex justify-between '>
                        <h1 className='text-lg font-semibold text-white pl-2 py-2 '>Company</h1>
                        <SlArrowDown className={`text-white absolute top-3 right-3 cursor-pointer transition-transform duration-500 rotate-0     ${checked ? '' : 'rotate-180 cursor-pointer '}`}
                            onClick={() => {
                                setChecked((prevState) => !prevState)
                            }}></SlArrowDown>
                    </div>
                {/* Content */}
                    <div className={` text-[#59737E] transition-all duration-500   ${checked ? 'max-h-80' : 'max-h-0'} `}>
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
               
                    <div className=' h-12   flex justify-between '>
                        <h1 className='text-lg font-semibold text-white pl-2 py-2 '>Information</h1>
                        <SlArrowDown className={`text-white absolute top-3 right-3 cursor-pointer  transition-transform duration-500 rotate-0     ${checked1 ? '' : 'rotate-180 cursor-pointer'}`}
                            onClick={() => {
                                setChecked1((prevState) => !prevState)
                            }}></SlArrowDown>
                    </div>
                {/* Content */}
                    <div className={` text-[#59737E] transition-all duration-500   ${checked1 ? 'max-h-80' : 'max-h-0'} `}>
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
               
                    <div className=' h-12   flex justify-between '>
                        <h1 className='text-lg font-semibold text-white pl-2 py-2 '>Information</h1>
                        <SlArrowDown className={`text-white absolute top-3 right-3 cursor-pointer  transition-transform duration-500 rotate-0     ${checked2 ? '' : 'rotate-180 cursor-pointer'}`}
                            onClick={() => {
                                setChecked2((prevState) => !prevState)
                            }}></SlArrowDown>
                    </div>
                {/* Content */}
                    <div className={` text-[#59737E] transition-all duration-500   ${checked2 ? 'max-h-80' : 'max-h-0'} `}>
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
         
                    <div className=' h-12   flex justify-between '>
                        <h1 className='text-lg font-semibold text-white pl-2 py-2 '>Service Center</h1>
                        <SlArrowDown className={`text-white absolute top-3 right-3 cursor-pointer  transition-transform duration-500 rotate-0     ${checked3 ? '' : 'rotate-180 cursor-pointer'}`}
                            onClick={() => {
                                setChecked3((prevState) => !prevState)
                            }}></SlArrowDown>
                    </div>
                {/* Content */}
                    <div className={` text-[#59737E] transition-all duration-500   ${checked3 ? 'max-h-80' : 'max-h-0'} `}>
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