import React from 'react';
import img from "../../assets/images/header_background_images/headerbg.png"
import { BiDownArrow } from 'react-icons/bi';

const NewCard = () => {
    return (


        <div>
            <h1 className='text-center text-2xl font-semibold pt-5'>My Bags items (0)</h1>
        <div class="grid grid-flow-row-dense grid-cols-3 ... p-10">
                  
      

          
            {/*  */}
                <div class="  col-span-3 lg:col-span-2 pt-5 py-3 border-b-2">
                {/*  */}
                <div className='grid grid-flow-row-dense grid-cols-7 '>
                    <div class="col-span-2 ">
                       <img src={img} className='h-[100%]'></img>
                    </div>
                    <div class="col-span-4 font-gilroy ">
                            <p className='lg:p-3 px-2'>
                            Fuchsia Printed Jacquard Viscose Shalwar Kameez</p>
                        <p className='lg:p-3 px-2'>In stock</p>
                            <p className='lg:p-3 px-2'> Size :34</p>
                            <p className='lg:p-3 px-2'>Bottom StyleClassic Pants</p>
                            <p className='lg:p-3 px-2'>Quantity</p>
                        <div className='flex border border-indigo-600 w-14 lg:w-28 lg:p-3 ml-3'>
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
         
            <div class=" mt-5 lg:mt-0">
                    <button className='lg:w-[100%] w-[300px] text-cente  text-white text-[14px]  lg:text-[18px] p-2 lg:p-5 bg-[#121d45] '>CheckOut</button>
                <h3 className='border-b-2 text-[20px] font-semibold px-2'>Order Summary</h3>
                <div className="flex flex-col w-[72]  font-gilroy ">
                        <div className='relative w-[300px] lg:w-[400px] overflow-hidden '>
                        <input type="checkbox"
                            className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 cursor-pointer
                    '></input>
                        <div className=' h-12 w-full  flex items-center'>
                            <h1 className='text-lg font-semibold text-black pl-2 '>Company</h1>
                        </div>
                        <div className='
                absolute top-3 right-3 tex-white transition-transform duration-500 rotate-0 peer-checked:rotate-180
                 '>
                            {/* aroow */}
                            <BiDownArrow className='text-black'></BiDownArrow>

                        </div>
                        {/* Content */}
                        <div className=' text-[#59737E] transition-all duration-500 max-h-0 peer-checked:max-h-80'>
                            <div className='py-4 pl-2'>
                                <ul>
                                    <li className='text-[18px] font-semibold'>Available Coupons</li>
                                    <li>Cart Gift</li>
                                   <div className='relative'>
                                    <input className='border w-[100%] py-1'/>
                                        <button className='absolute top-0 right-0 bg-[#121d45] py-1 px-2 text-white'>Apply</button>
                                   </div>
                                    <li>Promotional Coupon</li>
                                   <div className='relative'>
                                    <input className='border w-[100%] py-1'/>
                                        <button className='absolute top-0 right-0 bg-[#121d45] py-1 px-2 text-white'>Apply</button>
                                   </div>
                                </ul>
                            </div>
                        </div>



                    </div>

                </div>
                <div>
                        <div className='flex justify-between px-4 w-[300px] lg:w-[400px]'>
                        <p>Subtotal</p>
                        <p>Tk 11,325.58</p>
                    </div>
                        <div className='flex justify-between px-4 pt-4 w-[300px] lg:w-[400px]'>
                        <p>Shipping (Standard Shipping: within 3-4 days inside Dhaka, within 4-7 days outside Dhaka)</p>
                        <p className='w-[200px]  text-end'>Tk 160.00</p>
                    </div>
                        <div className='flex justify-between px-4 pt-4 border-b-2 w-[300px] lg:w-[400px]'>
                        <p>Vat </p>
                        <p>Tk 11,325.58</p>
                    </div>
                        <div className='flex justify-between px-4 pt-4 w-[300px] lg:w-[400px]'>
                        <p className='text-[20px] font-semibold'> Total </p>
                        <p className='text-[20px] font-semibold'>Tk 11,325.58</p>
                    </div>
                </div>
              
            </div>
            </div>
        </div>
    );
};

export default NewCard;