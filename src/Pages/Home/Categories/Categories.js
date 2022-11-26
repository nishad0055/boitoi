import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination } from "swiper";
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Categories = () => {
    
      const { data:allCategory =[], } = useQuery({
        queryKey: ['allCategory'],
        queryFn: async ()=>{
           const res = await fetch('http://localhost:5000/category')
           const data = await res.json()
           return data
        }
      })

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
          
         
       
             
         {
            allCategory.map(category =>  <SwiperSlide key={category.id} >
              <Link to=  {`cat/${category.id}`}  className='cursor-pointer' >
              <img  className='lg:h-96 opac ' src={category.img} alt="" />
              <h2 className='absolute w-full h-full hero-overlay  top-0 left-0  text-warning lg:text-4xl font-bold flex justify-center items-center' >{category.name} </h2>
              </Link>
            </SwiperSlide> )
           }
        </Swiper>

      </>
        </div>
    );
};

export default Categories;