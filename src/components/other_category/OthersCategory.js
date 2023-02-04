import React, { Fragment, useEffect, useState } from 'react';
import '../../assets/css/style.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode } from "swiper";
import axios from 'axios';
import { Link } from 'react-router-dom';

const OthersCategory = () => {
    const [othersCategory, setOthersCategory] = useState([]);
    useEffect(() => {
        axios
            .get("/data/OthersCategory.json")
            .then((res) => setOthersCategory(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <Fragment>
            <Swiper
                slidesPerView={1.3}
                // spaceBetween={2}
                slidesPerGroup={1}
                freeMode={false}
                pagination={{
                    clickable: true,
                }}
                loopFillGroupWithBlank={false}
                modules={[FreeMode]}
                className="mySwiper"
                id='others-category'
                breakpoints={{
                    640: {
                        slidesPerView: 2.5,
                        slidesPerGroup: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3.5,
                        slidesPerGroup: 3,
                    },
                    1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 10,
                    },
                }}
            >
                {
                    othersCategory.map((othersSingleCategory, index) => (
                        <SwiperSlide key={index} className="h-fit">
                            <div className='relative text-center p-0 m-0 category-slider-section'>
                                <img
                                    src={othersSingleCategory.img_link} className="object-cover" alt="" />
                                <div className='absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 text-white font-bold text-4xl uppercase '>
                                    <p className='font-gilroy text-sm lg:text-6xl othercatagory'>
                                        {othersSingleCategory.title}
                                    </p>
                                    <Link to={othersSingleCategory.related_link}>
                                        <p className='left-2/4  text-center uppercase font-gilroy bg-[#121D45] text-sm lg:text-xl othercatagory1-button mt-10'>Explore</p>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Fragment>
    );
};

export default OthersCategory;