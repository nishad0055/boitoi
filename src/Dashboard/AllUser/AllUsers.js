import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const {data: allusers=[], refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch('https://book-reselling-server.vercel.app/allusers')
            const data = await res.json()
            return data
        }
    })
    const handleMakeAdmin =(id)=>{
        fetch(`https://book-reselling-server.vercel.app/allusers/admin/${id}`,{
            method: 'PUT', 
        })
        .then(res=> res.json())
        .then(data =>{
            
            if(data.modifiedCount >0){
                refetch()
            }
        })
    }

    const handleUserDelete =(_id)=>{
        
        const confirm = window.confirm('Are you want to delete a user')

       if(confirm) {
        fetch(`https://book-reselling-server.vercel.app/users/${_id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                toast.success('User deleted successfull')
                refetch()
            }
        })
       }
    }


    return (
        <div>
            <h2 className="text-2xl">All User</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-responsive w-full">
                       
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
                                    <td > <button onClick={()=>handleUserDelete(user._id)} className='btn btn-sm' >X</button> </td>
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