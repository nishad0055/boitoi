import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {

    const {data: allusers=[], refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allusers')
            const data = await res.json()
            return data
        }
    })
    const handleMakeAdmin =(id)=>{
        fetch(`http://localhost:5000/allusers/admin/${id}`,{
            method: 'PUT', 
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount >0){
                refetch()
            }
        })
    }


    return (
        <div>
            <h2 className="text-2xl">All User</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                       
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Type</th>
                                <th>Make Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                         
                         {
                            allusers.map((user, i)=> 
                                <tr key={user._id} >
                                    <th>{i+1}</th>
                                    <td> {user.name} </td>
                                    <td> {user.email} </td>
                                    <td>{user.role} </td>
                                    <td> { user.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-outline btn-sm' >make admin</button>  } </td>
                                    <td >x</td>
                                </tr>)
                         }
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;