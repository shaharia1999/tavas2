import React, { Fragment, useEffect, useState } from 'react';
import OtherNav from '../menubar_without_transparent_background/OtherNav';
import { GiSelfLove } from 'react-icons/gi';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import img from '../../assets/images/logo/T Black.png'
import img2 from '../../assets/images/header_background_images/2.jpg'
import img3 from '../../assets/images/header_background_images/f1.jpg'
import { GrDislike, GrLike } from 'react-icons/gr';
import { BsCart2 } from 'react-icons/bs';

const MyAccountNew = () => {
    const [panjabi, setPanjabi] = useState([]);

    useEffect(() => {
        axios
            .get("/data/panjabi_products.json")
            .then((res) => setPanjabi(res.data))
            .catch((err) => console.log(err))
    }, [])
    const [sortState, setSortState] = useState("none");
    const sortMethods = {
        none: { method: (a, b) => null },
        ascending: { method: (a, b) => (a.price > b.price ? -1 : 1) }, //low to high
        descending: { method: (a, b) => (a.price > b.price ? 1 : -1) } // high to low
    }


    return (
       <Fragment>
        <OtherNav></OtherNav>
        <h1 className='font-arial text-2xl font-semibold ml-10 lg:mt-10'>MyAccount</h1>
        <div className='lg:flex'>
            <div className='myAccout_ul lg:w-[20%]'>
                <ul>
                    <li>Account Information </li>
                    <li>Address Book  </li>
                    <li>Wish List </li>
                    <li>Order History  </li>
                    <li>My Points  </li>
                    <li>Contact Us </li>
                    <li>Refer Friends (Aff Link)  </li>
                    <li >Logout  </li>
                </ul>
            </div>
            
            {/* 
                           Opening Account Info
                           
             */}
                <div className='grid lg:grid-cols-3 content-center md:grid-cols-4 grid-cols-1 gap-6 pb-5 justify-center mx-5 ml-10'>
                      <div className='opening-myAccount border'>
                        <img src={img2}></img>
                        <div className='flex justify-center '> 
                            <button className='absolute bottom-[80px] bg-white p-5 radious'>
                                <GrLike className=' text-4xl   '></GrLike>
                         </button>
                        </div>
                        <div className='flex justify-center '>
                            <h3 className='absolute bottom-8 text-center text-black font-glory text-2xl'>Recommendation</h3>
                        </div>
                        <div className='flex justify-center '>
                            <p className='absolute bottom-0 text-center text-black font-glory text-1xl pt-3'>Select All Items Just for You</p>
                        </div>
                   
                     
                      
                        
                      </div>
                      <div className='opening-myAccount border'>
                        <img src={img3}></img>
                        <div className='flex justify-center '> 
                            <button className='absolute bottom-[80px] bg-white p-5 radious'>
                                <GiSelfLove className=' text-4xl   '></GiSelfLove>
                         </button>
                        </div>
                        <div className='flex justify-center '>
                            <h3 className='absolute bottom-8 text-center text-black font-glory text-2xl'>WishList</h3>
                        </div>
                        <div className='flex justify-center '>
                            <p className='absolute bottom-0 text-center text-black font-glory text-1xl pt-3'>Select All Items Just for You</p>
                        </div>
                   
                     
                      
                        
                      </div>
                      <div className='opening-myAccount border'>
                        <img src={img2}></img>
                        <div className='flex justify-center '> 
                            <button className='absolute bottom-[80px] bg-white p-5 radious'>
                                
                               
                                <BsCart2 className=' text-4xl   '></BsCart2>
                         </button>
                        </div>
                        <div className='flex justify-center '>
                            <h3 className='absolute bottom-8 text-center text-black font-glory text-2xl'>About Us</h3>
                        </div>
                        <div className='flex justify-center '>
                            <p className='absolute bottom-0 text-center text-black font-glory text-1xl pt-3'>Select All Items Just for You</p>
                        </div>
                   
                     
                      
                        
                      </div>
                 
                 </div>
            {/* 
                           Opening Account Info
                           
             */}
            {/* account Info */}
                <div className='myAccout_info hidden'>
                    <h1 className='text-center lg:text-2xl font-bold'>ACCOUNT INFORMATION</h1>
                    <p className='text-center'>This section contains your address information</p>
                    <div className='flex justify-between px-10 border-b-2'>
                        <h5 className='font-semibold text-2xl'>Personal Information</h5>
                        <button className='btn mb-2'>Edit</button>
                    </div>
                    <div className='account_info'>
                        <div className='flex justify-between py-4 px-8'>
                            <div>
                                <p className='font-semibold'>First Name</p>
                                <p className='py-3'>Md</p>
                            </div>
                            <div>
                                <p className='font-semibold'>Last Name</p>
                                <p className='py-3'>Shaharia</p>
                            </div>


                        </div>
                        <div className='flex justify-between py-4 px-8'>
                            <div>
                                <p className='font-semibold'>Email</p>
                                <p className='py-3'>adeptshaharia@gmail.com</p>
                            </div>
                            <div>
                                <p className='font-semibold'>Number</p>
                                <p className='py-3'>01707018322</p>
                            </div>


                        </div>
                        <div className='flex justify-between py-4 px-8'>
                            <div>
                                <p className='font-semibold'>Gender</p>
                                <p className='py-3'>Male</p>
                            </div>
                            <div>
                                <p className='font-semibold'>Date Of Birth</p>
                                <p className='py-3'>01/01/2023</p>
                            </div>


                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            {/* Account Info End */}
            {/* Edit Info  start*/}
                <div className='myAccout_info hidden'>
                    <h1 className='text-center lg:text-2xl font-bold'>ACCOUNT INFORMATION</h1>
                    <p className='text-center'>This section contains your address information</p>
                    <div className='flex justify-between px-10 border-b-2'>
                        <h5 className='font-semibold text-2xl'>Edit Information</h5>
                        <button className='btn mb-2'>Save</button>
                    </div>
                    <div className='account_info '>
                        <div className='flex justify-between py-4 px-8'>
                            <div>
                                <p className='font-semibold'>First Name</p>
                                {/* <p className='py-3'>Md</p> */}
                                <input placeholder='First Name ' className='py-2 px-10 border'></input>
                            </div>
                            <div>
                                <p className='font-semibold'>Last Name</p>
                                <input placeholder='First Name ' className='py-2 px-10 border'></input>
                            </div>


                        </div>
                        <div className='flex justify-between py-4 px-8'>
                            <div>
                                <p className='font-semibold'>Email</p>
                                <input placeholder='edit Email ' className='py-2 px-10 border'></input>
                            </div>
                            <div>
                                <p className='font-semibold'>Number</p>
                                <input placeholder='edit Number ' className='py-2 px-10 border'></input>
                            </div>


                        </div>
                        <div className='flex justify-between py-4 px-8'>
                            <div>
                                <p className='font-semibold'>Gender</p>
                                <select class="select select-bordered w-full max-w-xs">
                                    <option disabled selected> chose Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div>
                                <p className='font-semibold'>Date Of Birth</p>
                                <input placeholder='birth date ' className='py-2 px-10 border'></input>
                            </div>


                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            {/* Edit Info End */}
            {/* Address Book Start */}
                <div className='myAccout_info hidden '>
                    <h1 className='text-center lg:text-2xl font-bold'>Address Books</h1>
                    <p className='text-center'>This section contains your address information</p>
                    <div className='flex justify-between px-10 border-b-2'>
                        <h5 className='font-semibold text-2xl'>Default Address</h5>
                        <button className='btn mb-2'>Edit</button>
                    </div>
                    <div className='account_info'>
                        <div className='flex justify-between py-4 px-8'>
                            <div>
                                <p className='font-semibold'>First Name</p>
                                <p className='py-3'>Md</p>
                            </div>
                            <div>
                                <p className='font-semibold'>Last Name</p>
                                <p className='py-3'>Shaharia</p>
                            </div>



                        </div>
                        <div className='flex justify-between py-4 px-8'>
                            <div>
                                <p className='font-semibold'>Email</p>
                                <p className='py-3'>adeptshaharia@gmail.com</p>
                            </div>
                            <div>
                                <p className='font-semibold'>Number</p>
                                <p className='py-3'>01707018322</p>
                            </div>


                        </div>
                        <div className='flex justify-between py-4 px-8'>
                            <div>
                                <p className='font-semibold'>Chity</p>
                                    <p className='py-3'>Dhaka</p>
                                
                            </div>
                            <div>
                                <p className='font-semibold'>Post Code</p>
                                <p className='py-3'>3432</p>
                            </div>


                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>

            {/* Address Book End */}
            {/* Address Book edit Start */}
                <div className='myAccout_info hidden '>
                    <h1 className='text-center lg:text-2xl font-bold'>ACCOUNT INFORMATION</h1>
                    <p className='text-center'>This section contains your address information</p>
                    <div className='flex justify-between px-10 border-b-2'>
                        <h5 className='font-semibold text-2xl'>Edit Address</h5>
                        <button className='btn mb-2'>Save</button>
                    </div>
                    <div className='account_info'>
                        <div className='flex justify-between py-4 px-8'>
                            <div>
                                <p className='font-semibold'>First Name</p>
                             
                                <input placeholder='First Name ' className='py-2 px-10 border'></input>
                            </div>
                            <div>
                                <p className='font-semibold'>Last Name</p>
                                <input placeholder='First Name ' className='py-2 px-10 border'></input>
                            </div>


                        </div>
                        <div className='flex justify-between py-4 px-8'>
                            <div>
                                <p className='font-semibold'>Email</p>
                                <input placeholder='edit Email ' className='py-2 px-10 border'></input>
                            </div>
                            <div>
                                <p className='font-semibold'>Number</p>
                                <input placeholder='edit Number ' className='py-2 px-10 border'></input>
                            </div>


                        </div>
                        <div className='flex justify-between py-4 px-8'>
                            <div>
                                <p className='font-semibold'>Chity</p>
                                <select class="select select-bordered w-full max-w-xs">
                                    <option disabled selected> chose Chity</option>
                                    <option>Dhaka</option>
                                    <option>Sylhet</option>
                                </select>
                            </div>
                            <div>
                                <p className='font-semibold'>Post Code</p>
                                <input placeholder='Post code ' className='py-2 px-10 border'></input>
                            </div>


                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            {/* Address Book edit end*/}
            {/* Wish List Start */}
                <div className="grid lg:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-2 pb-5 mx-5 hidden ">
                    {
                        panjabi
                            .sort(sortMethods[sortState].method)
                            .map((data, index) => {
                                const { id, product_title, category, code, color, images, size, description, details, material, care, stock_status, regular_price, sale_price, galleryImages } = data;
                                return (
                                    <div key={index} className='panjabisProducts'>
                                        <Link to={`/panjabis/${data.id}`}
                                            state={{ id, product_title, category, code, color, images, size, description, details, material, care, stock_status, regular_price, sale_price, galleryImages }}
                                        >
                                            <div className='panjabisProducts_img-dev '>
                                                <img
                                                    className=''
                                                    src={data.images[0]}
                                                  
                                                    alt="" />
                                            </div>
                                            <button className='wish_love'>
                                                <GiSelfLove className='text-2xl text-black bg-white' />
                                            </button>
                                            <button className='sale'>
                                                {/* <GiSelfLove className='text-2xl text-black bg-white' /> */}
                                                <p>Sale</p>
                                            </button>
                                            <h1 className='lg:text-left md:text-left text-center font-gilroybold'><a href="/panjabis">{data.product_title}</a></h1>
                                            <p className='text-inherit font-semibold lg:text-left md:text-left text-center'>Product Code: {data.code}</p>
                                            <p className='lg:text-left md:text-left text-center font-gilroybold'>BDT: {data.regular_price}</p>
                                            <button className='bg-gray-900 w-full py-2 text-white'> ADD TO BAG</button>
                                        </Link>
                                    </div>
                                )
                            })
                    }
                </div>
            {/* Wish List End */}
            {/* Contract_section  start*/}
                <div className='hidden'>
                <section id="contract" >
                    <div class="contract-container  ">
                        <div class="contract-row1">
                            <img src={img} alt=""/>
                        </div>
                        <div class='contract-row2 '>
                            <div class="contract-titles">
                                <p class="contract-title">LET'S TALK</p>
                                <h3>Quick Contact</h3>
                                <div class="contract-span"></div>
                                <p class="contract-discription">Tempore corrupti temporibus fuga earum asperiores fugit laudantium the breakpoint for tablet devices for creative agency.</p>

                            </div>
                            <div class='form'>
                                <div class="name-email">
                                    <input type="text" placeholder="Name"/>
                                        <input type="email" placeholder="Email"/>
                                        </div>
                                        <div class="name-email">
                                            <input type="text" placeholder="phone number"/>
                                                <input type="email" placeholder="Address"/>
                                                </div>
                                                <textarea cols="80" rows="8" placeholder="Write message"></textarea>
                                                <button class="contract-btn">SUBMIT NOW</button>
                                        </div>
                                </div>
                            </div>


                        </section>
                </div>   
            {/* Contract_section  End*/}
            {/* Refar A friend Start */}
                <div className='myAccout_info hidden'>
                    <h1 className='text-center lg:text-2xl font-bold'>ACCOUNT INFORMATION</h1>
                    <p className='text-center'>This section contains your address information</p>
                    <div className=' px-10 border-b-2'>
                        <h5 className='font-semibold text-2xl'>Invite Friends</h5>
                        
                    </div>
                    <div className=' px-10 '>
                        <h5 className='font-semibold text-2xl'>Your Refar Link</h5>
                        <input placeholder='Link ' className='py-2 px-20 border-2'></input>
                        <button className='btn m-1'>Copy</button> 
                    </div>
                        
                </div>  
            {/* Refar A friend  End*/}
            
        </div>
        </Fragment>
    );
};

export default MyAccountNew;