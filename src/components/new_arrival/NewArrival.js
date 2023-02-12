import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import '../../components/new_arrival/newAribe.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

const NewArrival = () => {
    const [arrival, setArrival] = useState([]);
    useEffect(() => {
        axios
            .get("/data/NewArrival.json")
            .then((res) => setArrival(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <Fragment>
            <div className='new-arrival-section arribe h-screen lg:h-[100vh] cetagory_mobile2 pb-20'>
                <div className='grid grid-cols-2 mt-0 lg:mt-10 new-arrival-heading-section lg:mx-2'>
                    <div>
                        <p className=' sm:text-md lg:text-4xl text-[#121D45] pl-8 cetagory_title  font-bold'>New Arrival</p>
                    </div>
                    <div>
                        <p className=' text-right sm:text-md lg:text-2xl text-[#121D45] pr-5 pb-2  font '>
                            <Link to="/" className=' border-b-2 border-[#121D45] cetagory_title '>
                                Shop Now 
                                {/* <span className='inline-block'><RxDoubleArrowRight /></span> */}
                            </Link>
                        </p>
                    </div>
                </div>
                <div className='pb-2 '>
                    <Swiper
                        slidesPerView={1.3}
                        spaceBetween={2}
                        slidesPerGroup={1}
                        pagination={{
                            clickable: true,
                        }}
                        scrollbar={true}
                        className="mySwiper"
                        modules={[Scrollbar]}
                        id='new-arrival'
                        breakpoints={{
                            600: {
                                slidesPerView: 2.5,
                                slidesPerGroup: 2,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 3.5,
                                slidesPerGroup: 3,
                                spaceBetween: 2,
                            },
                            992: {
                                slidesPerView:2.5,
                                slidesPerGroup: 2,
                                spaceBetween: 0,
                            },
                        }}
                    >
                        {
                            arrival.map((singleArrival, index) => (
                                <SwiperSlide>
                                    <div key={index} className="new-arrival-slider-section arrive ">
                                        <img src={singleArrival.img_link} className=" new-arrival-image pb-6" alt="" />
                                        <p className='text-left text-md h-14 font-sanf'>{singleArrival.title}</p>
                                        <p className='text-left font-gilroybold text-[#121D45] pb-5 lg:pb-5'>BDT. {singleArrival.price}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </Fragment>
    );
};

export default NewArrival;