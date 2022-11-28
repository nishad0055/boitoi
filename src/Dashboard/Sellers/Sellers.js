import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Sellers = () => {
    const {data: allsellers=[], refetch } = useQuery ({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch('https://book-reselling-server.vercel.app/allsellers')
            const data = await res.json()
            return data
        }
    })

    const handleSellerDelete = _id =>{
        const confirm = window.confirm('Are you want to delete a seller')
        if(confirm){
            fetch(`https://book-reselling-server.vercel.app/users/${_id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                toast.success('Seller deleled successfull')
                refetch()
            })
        }
    }
    const handleVerify = id =>{
        fetch(`https://book-reselling-server.vercel.app/allsellers/${id}`,{
            method: 'PUT',
        })
        .then( res => res.json())
        .then( data =>{
            console.log(data)
            if(data.modifiedCount > 0 ){
                toast.success('verify updated')
                refetch()
            }
        })
    }

    return (
        <div>
            <h2 className="text-2xl my-5">All Seller</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                       
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Type</th>
                                <th>Verify</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                         
                         {
                            allsellers.map((user, i)=> 
                                <tr key={user._id} >
                                    <th>{i+1}</th>
                                    <td> {user.name} </td>
                                    <td> {user.email} </td>
                                    <td>{user.role} </td>
                                    <td>
                                        {
                                            user.Status?
                                            <p className='btn btn-sm btn-primary' >{user.Status}</p>:
                                            <button onClick={()=> handleVerify(user._id)} className='btn btn-outline btn-sm' >Verify</button> 
                                        }

                                        </td>
                                    <td><button onClick={()=>handleSellerDelete(user._id)}  className='btn btn-outline btn-sm' >X</button> </td>

                                </tr>)
                         }
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Sellers;