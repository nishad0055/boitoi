import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyOrderTable from './MyOrderTable';

const MyOrder = () => {
    const { user } = useContext(AuthContext)

    const { data: bookings = [], } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookedorder?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })



    return (
        <div>
            <h2 className='text-lg font-serif my-5' >My Order</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                         bookings.map((book, i)=>
                            <tr key={book._id}>
                                <th>{i+1}</th>
                                <td>{book.productName} </td>
                                <td> {book.price} </td>
                                <td> <button>Pay</button> </td>
                            </tr>
                            )
                       }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;