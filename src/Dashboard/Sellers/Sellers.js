import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Sellers = () => {
    const {data: allsellers=[], refetch } = useQuery ({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allsellers')
            const data = await res.json()
            return data
        }
    })
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
                                    <td><button  className='btn btn-outline btn-sm' >Verify</button> </td>
                                    <td><button  className='btn btn-outline btn-sm' >X</button> </td>
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