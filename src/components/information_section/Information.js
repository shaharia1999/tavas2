// import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import "../../assets/css/style.css"

// const Information = () => {
//     return (
//         <Fragment>
//             <div className="grid lg:grid-cols-3 store grid-cols-2 ">
//                 <div>
//                     <Link to="/">
//                         <img className='w-full h-[600px] ' src="https://i.ibb.co/xY02ZQ7/1.png" alt="" />
//                     </Link>
//                 </div>
//                 <div>
//                     <Link to="/">
//                         <img className='w-full h-[600px] ' src="https://i.ibb.co/hMGb59N/Outlets.png" alt="" />
//                     </Link>
//                 </div>
//                 <div>
//                     <Link to="/">
//                         <img className='w-full h-[600px] ' src="https://i.ibb.co/Gkx4yHj/2.png" alt="" />
//                     </Link>
//                 </div>
//             </div>
//         </Fragment>
//     );
// };

// export default Information;
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

const Information = () => {
    const [othersCategory, setOthersCategory] = useState([]);
    useEffect(() => {
        axios
            .get("/data/OutLate.json")
            .then((res) => setOthersCategory(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <Fragment >
            <div className="cetagory_parants cetagory_mobile1">
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
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 3.5,
                            slidesPerGroup: 3,
                        },
                        1024: {
                            slidesPerView: 2.5,
                            slidesPerGroup: 3,
                            spaceBetween: 0,
                        },
                    }}
                >
                    {
                        othersCategory.map((othersSingleCategory, index) => (
                            <SwiperSlide key={index} className="h-fit">
                                <div className='relative text-center  m-0 category-slider-section other_cateagory'>
                                    <img
                                        src={othersSingleCategory.img_link} className="object-cover" alt="" />
                                    <div className='absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 text-white font-bold text-4xl uppercase '>
                                        <p className='font-gilroy text-sm lg:text-6xl othercatagory'>
                                            {othersSingleCategory.title}
                                        </p>

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

export default Information;