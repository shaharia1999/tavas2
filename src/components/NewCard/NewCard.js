import React, { useState } from 'react';
import img from "../../assets/images/header_background_images/headerbg.png"
import { SlArrowDown } from 'react-icons/sl';

const NewCard = () => {

    const [checked, setChecked] = useState(false)
    const toggleChecked = () => {
        setChecked((prevState) => !prevState)
    }
   
    return (


        <div>
            <h1 className='text-center text-3xl font-semibold pt-5 cetagory_title'>My Cart items (0)</h1>
        <div class="grid grid-flow-row-dense grid-cols-3 ... p-10 lg:px-32">
                  
      

          
            {/*  */}
                <div class="  col-span-3 w-[100%] lg:col-span-2 pt-5 border py-3 lg:mr-1">
                {/*  */}
                <div className='grid grid-flow-row-dense grid-cols-7 '>
                    <div class="col-span-2 ">
                       <img src={img} className='h-[100%]'></img>
                    </div>
                    <div class="col-span-4 font-gilroy pl-5 ">
                            <p className='lg:p-3 px-2'>
                            Fuchsia Printed Jacquard Viscose Shalwar Kameez</p>
                        <p className='lg:p-3 px-2'>In stock</p>
                            <p className='lg:p-3 px-2'> Size :34</p>
                            <p className='lg:p-3 px-2'>Bottom StyleClassic Pants</p>
                            <p className='lg:p-3 px-2'>Quantity</p>
                        <div className='flex border border-indigo-600 w-16 lg:w-28 lg:p-3 p-1 ml-3'>
                            <p className='lg:text-2xl cursor-pointer'>-
                            </p>
                              <input className='lgz:w-10 w-5 text-center mx-2'value={0}/>
                            <p className='lg:text-2xl cursor-pointer'>+</p>
                        </div>
                        <button className='bg-[#121d45] ml-3 text-white lg:py-2 p-1 lg:px-3 mt-2'>Remove</button>
                        {/* <div >
                            <h4>-</h4>
                            <input> 6</input>
                            <h4>+</h4>

                        </div> */}
                    </div>
                    <div class="col-span-1  flex justify-end ml-2">
                        <h3 className='p-5 font-semibold text-[16px]'> Tk. 4218</h3>
                    </div>
                </div>
            </div>
         
                <div class=" mt-5 lg:mt-0 border col-span-3 lg:col-span-1">
                    <div className='px-5'>
                    <button className='w-[100%] mt-2 text-cente  text-white text-[14px]  lg:text-[18px] p-2 lg:p-2 bg-[#121d45] '>CheckOut</button>
                <h3 className='border-b-2 text-[20px] font-semibold p-2'>Order Summary</h3>
                <div className="flex flex-col w-[100%]  font-gilroy ">
                        <div className='relative  overflow-hidden '>
                        {/* <input type="checkbox"
                            className=' peer bg-red-500 absolute top-0 inset-x-0 w-full h-12 opacity-0 cursor-pointer
                    '></input> */}
                                <div className=' h-12   flex justify-between border'>
                                <h1 className='text-lg font-semibold text-black pl-2 py-2 '>Apply Points/Credits/Gift Card</h1>
                                <SlArrowDown className={`text-black absolute top-3 right-3  transition-transform duration-500 rotate-0     ${checked ? '' : 'rotate-180'}`}
                                    onClick={() => {
                                        setChecked((prevState) => !prevState)
                                    }}></SlArrowDown>
                        </div>
           

                        {/* Content */}
                            <div className={` text-[#59737E] transition-all duration-500   ${checked ? 'max-h-80' :'max-h-0'} `}>
                            <div className='py-4 pl-2'>
                                <ul>
                                    <li className='text-[18px] font-semibold'>Available Coupons</li>
                                        <li className='py-1'>Cart Gift</li>
                                   <div className='relative pr-2'>
                                    <input className='border w-[100%] py-1'/>
                                        <button className='absolute top-0 right-2 bg-[#121d45] py-1 px-2 text-white'>Apply</button>
                                   </div>
                                    <li className='py-1'>Promotional Coupon</li>
                                   <div className='relative pr-2'>
                                    <input className='border w-[100%] py-1'/>
                                        <button className='absolute top-0 right-2 bg-[#121d45] py-1 px-2 text-white'>Apply</button>
                                   </div>
                                </ul>
                            </div>
                        </div>



                    </div>

                </div>
                <div>
                        <div className='flex justify-between px-4 '>
                        <p>Subtotal</p>
                        <p>Tk 11,325.58</p>
                    </div>
                        <div className='flex justify-between px-4 pt-4 '>
                        <p>Shipping (Standard Shipping: within 3-4 days inside Dhaka, within 4-7 days outside Dhaka)</p>
                        <p className='w-[200px]  text-end'>Tk 160.00</p>
                    </div>
                        <div className='flex justify-between px-4 pt-4 border-b-2 '>
                        <p>Vat </p>
                        <p>Tk 11,325.58</p>
                    </div>
                        <div className='flex justify-between px-4 pt-4 '>
                        <p className='text-[20px] font-semibold'> Total </p>
                        <p className='text-[20px] font-semibold'>Tk 11,325.58</p>
                    </div>
                </div>
              
            </div>
                </div>
            </div>
        </div>
    );
};

export default NewCard;