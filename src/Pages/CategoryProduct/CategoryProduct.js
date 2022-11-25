import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CatCard from './CatCard';

const CategoryProduct = () => {
  const  categoryItem = useLoaderData()
  console.log(categoryItem)
    return (
        <div className='my-16' >
            <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto' >
              {
                categoryItem.map(items =><CatCard
                key={items._id}
                items = {items}
                ></CatCard>)
              }
            </div>
        </div>
    );
};

export default CategoryProduct;