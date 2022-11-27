import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SellerAddedProduct = () => {
    const {user} = useContext(AuthContext)

     const {data: addedProduct = [] } = useQuery({
        queryKey: ['addedProduct'],
        queryFn: async () =>{
            const res  = await fetch(`http://localhost:5000/seller-added-product?email=${user?.email}`)
            const data = await res.json()
            return data
            
        }
     })

    return (
        <div>
            <h2 className='text-lg font-serif my-5' >Added Product List</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Adv.Product</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                         addedProduct.map((product, i)=>
                            <tr key={product._id}>
                                <th>{i+1}</th>
                                <td>{ product.title } </td>
                                <td>  </td>
                                <td> <button  className='btn btn-sm'>X</button> </td>
                                <td> <button className='btn btn-sm' >Advertise</button> </td>
                            </tr>
                            )
                       }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SellerAddedProduct;