import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CatCard from './CatCard';

const CategoryProduct = () => {
  const  categoryItem = useLoaderData()
  const [booking, setBooking] = useState(null)
  
    return (
        <div className='my-16' >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto' >
              {
                categoryItem.map(items =><CatCard
                key={items._id}
                items = {items}
                setBooking = {setBooking}
                ></CatCard>)
              }
            </div>
            {
                booking && 
                <BookingModal
                booking = {booking}
                setBooking ={setBooking}
                ></BookingModal>
            }
        </div>
    );
};

export default CategoryProduct;