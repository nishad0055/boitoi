import { useQuery } from '@tanstack/react-query';
import React from 'react';
import FeatureCard from './FeatureCard';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const FeatureBook = () => {

    const { data: advProducts = [], } = useQuery({
        queryKey: ['advProducts'],
        queryFn: async () => {
            const res = await fetch('https://book-reselling-server.vercel.app/Adproducts')
            const data = res.json()
            return data

        }
    })

    return (
        <div className='mx-2 my-16' >
            <h2 className='text-2xl font-serif font-bold' >Featured Ads</h2>
            <div className='container mx-auto my-5' >
                
                <>
                   
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    
                {
                        advProducts.map(items => <SwiperSlide>
                             <FeatureCard
                             items ={items}
                        ></FeatureCard>
                        </SwiperSlide> )
                 }

                 </Swiper>

                </>

            </div>
        </div>
    );
};

export default FeatureBook;