import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SellerAddedProduct = () => {
    const {user} = useContext(AuthContext)

     const {data: addedProduct = [], refetch } = useQuery({
        queryKey: ['addedProduct'],
        queryFn: async () =>{
            const res  = await fetch(`https://book-reselling-server.vercel.app/seller-added-product?email=${user?.email}`)
            const data = await res.json()
            return data
            
        }
     })

     const handleDelete = (_id) =>{
        fetch(`https://book-reselling-server.vercel.app/products/${_id}`,{
            method: 'DELETE',
        }) 
        .then(res=> res.json())
        .then(data =>{
            if(data.deletedCount> 0){
                toast.success('Product deleted successfully')
                refetch()
            }
        })
        
     }

     const handleAdvert = (_id) =>{

        fetch(`https://book-reselling-server.vercel.app/products/${_id}`,{
            method: 'PUT',
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
           if(data.modifiedCount > 0){
             toast.success('Advertisement added successfull')
             refetch()
           }
            
        })
     }

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
                                <td> <button onClick={()=>handleDelete(product._id)}  className='btn btn-sm'>X</button> </td>
                                <td> 
                                    {
                                        product.advertise ?
                                        <button>Advertised</button>:
                                        <button onClick={()=>{handleAdvert(product._id)}}  className='btn btn-sm' >Advertise</button>

                                    }
                                 </td>
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