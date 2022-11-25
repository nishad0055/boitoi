import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CatCard from './CatCard';

const CategoryProduct = () => {
  const  categoryItem = useLoaderData()
  const [booking, setBooking] = useState(null)
  console.log(categoryItem)
    return (
        <div className='my-16' >
            <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto' >
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
                ></BookingModal>
            }
        </div>
    );
};

export default CategoryProduct;