import { useQuery } from '@tanstack/react-query';
import React from 'react';
import RecentProductCard from './RecentProductCard';

const RecentProduct = () => {
    const {data: allproduct=[], refetch} = useQuery({
        queryKey: ['allproduct'],
        queryFn: async()=>{
            const res = await fetch('https://book-reselling-server.vercel.app/allproduct')
            const data = res.json()
            return data
        }
    })
    return (
        <div className='my-16 mx-2' >
            <div>
                 <h2 className='text-2xl font-serif font-bold my-8' >Recently Added Product</h2>
                 <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 ' >
                    {
                        allproduct.slice(0,6).map(product =><RecentProductCard
                        key={product._id}
                        product = {product}
                        refetch = {refetch}
                        ></RecentProductCard>)
                    }
                 </div>
            </div>
        </div>
    );
};

export default RecentProduct;