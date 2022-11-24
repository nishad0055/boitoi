import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../../../assets/images/2.jpg'
import slide2 from '../../../assets/images/3.jpg'
import slide3 from '../../../assets/images/5.jpg'
import slide4 from '../../../assets/images/images.jpeg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination } from "swiper";
import { Link } from 'react-router-dom';

const Categories = () => {
    
    const bookCat = [{

    }]

    return (
        <div className='my-14 container mx-auto' >
             <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          
          <SwiperSlide>
            <Link to='/login'  className='cursor-pointer' >
            <img  className='h-96' src={slide2} alt="" />
            <h2 className='absolute w-full h-full top-0 left-0  text-white text-5xl font-bold flex justify-center items-center   ' >hello</h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <img  className='h-96' src={slide2} alt="" />
            <h2 className='absolute w-full h-full top-0 left-0  text-white text-5xl font-bold flex justify-center items-center   ' >hello</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img  className='h-96' src={slide2} alt="" />
            <h2 className='absolute w-full h-full top-0 left-0  text-white text-5xl font-bold flex justify-center items-center   ' >hello</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img  className='h-96' src={slide2} alt="" />
            <h2 className='absolute w-full h-full top-0 left-0  text-white text-5xl font-bold flex justify-center items-center   ' >hello</h2>
          </SwiperSlide>
          
          
        </Swiper>
      </>
        </div>
    );
};

export default Categories;