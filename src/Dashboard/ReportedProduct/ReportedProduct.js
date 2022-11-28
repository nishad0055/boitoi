import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ReportedProduct = () => {

    const { data: reportedProduct = [] , refetch} = useQuery({
        queryKey: ['reportedProduct'],
        queryFn: async () => {
            const res = await fetch('https://book-reselling-server.vercel.app/reported-product')
            const data = await res.json()
            return data
        }
    })

    const handleDelete = id =>{
        fetch(`https://book-reselling-server.vercel.app/reported-product/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                toast.success('Reported Product Delete Successfull')
                refetch()
            }
        })

    }

    return (
        <div className='my-16' >
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            reportedProduct.map((product,i) =><tr key={product._id}>
                                <th>{i+1} </th>
                                <td> {product.title} </td>
                                <td> {product.report} </td>
                                <td> <button onClick={()=>handleDelete(product._id)}  className='btn btn-sm btn-outline' >x</button> </td>
                            </tr>)
                        }

                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedProduct;