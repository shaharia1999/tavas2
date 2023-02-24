import React from 'react';
import img from "../../assets/images/header_background_images/headerbg.png"
import { BiDownArrow } from 'react-icons/bi';
import { MdLocalShipping } from 'react-icons/md';
import bkash from "../../assets/images/logo/download.png"
import { BsMinecart } from 'react-icons/bs';

const NewChackout = () => {
    return (
        <div className='py-5 px-10 font-gilroy'>
            <h1 className='text-3xl font-semibold space-x-1 pl-5 cetagory_title'>CHECKOUT</h1>
            <p className='pl-5'>Please fill in the fields below and place order to complete your purchase!</p>
            <div className='lg:flex'>
                <div className='lg:w-[60%]  m-5'>
                 <div className='flex w-[100%] bg-[#121d45] text-white py-3'>
               
                        <h3 className='text-white ml-10 cetagory_title1'>SHIPPING ADDRESS</h3>
                 </div>
                    <div className="container border mx-auto">
                        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                            <div className="flex flex-col md:w-full  checkUot_first">
                                <form className="justify-center w-full mx-auto" method="post" action>
                                    <div className="">
                                        <div className="space-x-0 lg:flex lg:space-x-4">
                                            <div className="w-full lg:w-1/2">
                                                <label for="firstName" className="block mb-3 text-1xl font-semibold text-black">First
                                                    Name</label>
                                                <input name="firstName" type="text" placeholder="First Name"
                                                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-[#121d45]" />
                                            </div>
                                            <div className="w-full lg:w-1/2 ">
                                                <label for="firstName" className="block mb-3 text-1xl font-semibold text-black">Last
                                                    Name</label>
                                                <input name="Last Name" type="text" placeholder="Last Name"
                                                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-[#121d45]" />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className="w-full">
                                                <label for="Email"
                                                    className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                                <input name="Last Name" type="text" placeholder="Email"
                                                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-[#121d45]" />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className="w-full">
                                                <label for="Address"
                                                    className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                                <textarea
                                                    className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-[#121d45]"
                                                    name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                            </div>
                                        </div>
                                        <div className="space-x-0 lg:flex lg:space-x-4">
                                            <div className="w-full lg:w-1/2">
                                                <label for="city"
                                                    className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                                <input name="city" type="text" placeholder="City"
                                                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-[#121d45]" />
                                            </div>
                                            <div className="w-full lg:w-1/2 ">
                                                <label for="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                                    Postcode</label>
                                                <input name="postcode" type="text" placeholder="Post Code"
                                                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-[#121d45]" />
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <label className="flex items-center text-sm group text-heading">
                                                <input type="checkbox"
                                                    className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" />
                                                <span className="ml-2 font-bold ">Save this information for next time</span></label>
                                        </div>
                                        <div className="relative pt-3 xl:pt-6"><label for="note"
                                            className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                            (Optional)</label><textarea name="note"
                                                className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#121d45]"
                                                rows="4" placeholder="Notes for delivery"></textarea>
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <label className="flex items-center text-sm group text-heading">
                                                <input type="checkbox"
                                                    className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" />
                                                <span className="ml-2 font-bold text-black">All of my information are correct</span></label>
                                        </div>
                                        <div className="mt-4">
                                            <button
                                                className="w-full px-6 py-3 text-white font-gilroy bg-[#121D45] ">Process</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    {/* Shepping method */}
                    <div className='border pb-10'>
                    <div className='flex w-[100%] bg-[#121d45] text-white py-3 mt-10'>
                     
                            <h3 className='text-white ml-10 cetagory_title1'>SHIPPING METHOD</h3>

                    </div>
                    <div className='flex justify-between'>
                            <div className="flex items-center mt-4">
                                <label className="flex items-center text-sm group text-heading">
                                    {/* <input type="radio"
                                        className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" /> */}
                                    <span className="ml-2 font-bold ">Save this information for next time</span></label>
                            </div>
                            <p className='pr-5 pt-5 font-bold'>2000</p>
                    </div>
                    </div>
                    {/* Payment method */}
                    <div className='border'>
                    <div className='flex w-[100%] bg-[#121d45] text-white py-3 mt-10'>
                       
                            <h3 className='text-white ml-10 cetagory_title1'>PAYMENT METHOD</h3>

                    </div>
                    <div className='pl-1'>
                            <div className="flex items-center mt-4">
                                <label className="flex items-center text-sm group text-heading">
                                    <input type="radio"
                                        className="w-5 h-5 " />
                                    <span className='ml-2 '><img src={bkash} className='w-10'></img></span>
                                    <span className="ml-2 font-bold ">BKash</span></label>
                            </div>
                            <div className="flex items-center mt-4">
                                <label className="flex items-center text-sm group text-heading">
                                    <input type="radio"
                                        className="w-5 h-5  " />
                                    <span className='ml-2'><BsMinecart className='ml-2 text-2xl w-10'></BsMinecart></span>
                                    <span className="ml-2 font-bold ">International debit/credit cards</span></label>
                            </div>
                            <div className="flex items-center mt-4">
                                <label className="flex items-center text-sm group text-heading">
                                    <input type="radio"
                                        className="w-5 h-5 " />
                                    <span className='ml-2'><MdLocalShipping className='ml-2 text-2xl w-10'></MdLocalShipping></span>
                                    <span className="ml-2 font-bold ">Cash on delivery</span></label>
                            </div>
                            
                    </div>
                    </div>

                </div>
               
                
                
                {/* summary */}
                <div className=' lg:w-[40%] m-5 '>
                    <div className='lg:w-[100%]  '>
                        <div className='flex w-[100%] bg-[#121d45] text-white py-3'>
                        
                            <h3 className='text-white ml-10 cetagory_title1'>ORDER REVIEW</h3>
                        </div>
                    </div>
                    <div className='flex justify-between py-1 px-2 border-b-2 text-[16px]'>
                        <p>PRODUCT</p>
                        <p>SUBTOTAL</p>
                    </div>
                    <div class="grid grid-flow-row-dense grid-cols-3 ... ">

                        <div class="  col-span-3   border-b-2">
                            
                            <div className='grid grid-flow-row-dense grid-cols-7 '>
                                <div class="col-span-2 ">
                                    <img src={img} className='h-[100%]'></img>
                                </div>
                                <div class="col-span-4 font-gilroy pl-2">
                                    <p className=''>
                                        Fuchsia Printed Jacquard Viscose Shalwar Kameez</p>
                                    <p className=''>In stock</p>
                                    <p className=''> Size :34</p>
                                    <p className=''>Bottom StyleClassic Pants</p>
                                    <p className=''>Quantity</p>

                                </div>
                                <div class="col-span-1  flex justify-end ml-2">
                                    <h3 className='p-5 font-semibold text-[16px]'> Tk. 4218</h3>
                                </div>
                            </div>
                        </div>

                     
                    </div>
                    <div class="grid grid-flow-row-dense grid-cols-3 ...  ">

                        <div class="  col-span-3  mt-4 border-b-2">
                            
                            <div className='grid grid-flow-row-dense grid-cols-7 '>
                                <div class="col-span-2 ">
                                    <img src={img} className='h-[100%]'></img>
                                </div>
                                <div class="col-span-4 font-gilroy pl-2">
                                    <p className=''>
                                        Fuchsia Printed Jacquard Viscose Shalwar Kameez</p>
                                    <p className=''>In stock</p>
                                    <p className=''> Size :34</p>
                                    <p className=''>Bottom StyleClassic Pants</p>
                                    <p className=''>Quantity</p>

                                </div>
                                <div class="col-span-1  flex justify-end ml-2">
                                    <h3 className='p-5 font-semibold text-[16px]'> Tk. 4218</h3>
                                </div>
                            </div>
                        </div>

                     
                    </div>
                    {/*  */}
                    <div className='flex justify-between py-1 px-2 border-b-2 text-[16px]'>
                        <p>SUBTOTAL</p>
                        <p className='font-semibold '>Tk 11,325.58</p>
                    </div>
                    <div className='flex justify-between py-1 px-2 border-b-2 text-[16px]'>
                        <p>SHIPPING</p>
                        <p className='font-semibold '>Tk 500 </p>
                    </div>
                    <div className='flex justify-between py-1 px-2 border-b-2 text-[16px]'>
                        <p>VAT</p>
                        <p className='font-semibold '>Tk 110</p>
                    </div>
                    <div className='flex justify-between  px-2 border-b-2 text-[19px] py-3'>
                        <p className='font-bold'>TOTAL</p>
                        <p className='font-bold '>Tk 11000</p>
                    </div>
                    <div className="mt-4">
                        <button
                            className="w-full px-6 py-3 text-white font-gilroy bg-[#121D45] ">PLACE ORDER</button>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default NewChackout;