import React, { Fragment, useEffect, useState } from 'react';
import '../../assets/css/style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import axios from 'axios';

const CategorySlider = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios
            .get("/data/HomeCategorySlider.json")
            .then((res) => setCategory(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <Fragment >
            <div className='lg:py-8 lg:px-6 m:0 p-0 cetagory_mobile '>
            <Swiper
                slidesPerView={1.3}
                spaceBetween={2}
                slidesPerGroup={1}
                navigation={true}
                modules={[Navigation]}
                id='category-slider'
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 5,
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
                    category.map((singleCategory, index) => (
                        <SwiperSlide key={index} className="h-fit py:0">
                            <div className='relative text-center pt:8 lg:py-4 lg:mx-2 category-slider-section'>
                                <img
                                    src={singleCategory.img_link} className="" alt="" />
                                <div className='absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 text-white font-bold text-2xl lg:text-4xl uppercase'>
                                    <a href="/">
                                        <p className='font-gilroybold'>
                                            {singleCategory.category_name}
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </Fragment>
    );
};

export default CategorySlider;            