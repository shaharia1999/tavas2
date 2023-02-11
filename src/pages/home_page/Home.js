import React, { Fragment, lazy, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper";
import axios from 'axios';

// popUp

const HomeNav = lazy(() => import('./HomeNav.js'))
const CategorySlider = lazy(() => import('../../components/home_category_slider/CategorySlider.js'));
const SignatureClub = lazy(() => import('../../components/signature_club/SignatureClub.js'));
const NewArrival = lazy(() => import('../../components/new_arrival/NewArrival.js'));
const Information = lazy(() => import('../../components/information_section/Information.js'));
const OthersCategory = lazy(() => import('../../components/other_category/OthersCategory.js'));
const ProductFacility = lazy(() => import('../../components/footer_product_facility_section/ProductFacility.js'));

const Home = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    axios
      .get("/data/HomeSlider.json")
      .then((res) => setBanner(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <Fragment>
      <HomeNav />
      <div className='relative'>
      <Swiper
        pagination={true} modules={[Autoplay]} className="mySwiper"
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
      >
        {
          banner.map((singleBanner, index) => (
            <SwiperSlide key={index} className="banner">
              <img
                src={singleBanner.slider_image_link} alt="" />
            </SwiperSlide>
          ))
        }
      </Swiper>
        <div className='absolute bottom-28 bannerTitle '>
          <h1 className='bannerTitle'>TREDITIONAL <br /> ATTRIDE</h1>
          <button className=''>SHOP NOW</button>


        </div>
      </div>
      <CategorySlider />
      <OthersCategory />
      <NewArrival />
      <Information />
      <SignatureClub />
      <ProductFacility />
    </Fragment>
  );
};

export default Home;