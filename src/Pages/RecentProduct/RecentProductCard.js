import React from 'react';
import toast from 'react-hot-toast';
import { GrLocation, GrUser } from 'react-icons/gr'
import { MdAccessTime } from 'react-icons/md'
import { Link } from 'react-router-dom';

const RecentProductCard = ({product, refetch}) => {
    const {condition, img, orginalPrice, phoneNumber, purchaseDate, salePrice,title, location, description , name, postDate, categoryId , _id , report} = product;

    const handleReported = _id =>{

        fetch(`https://book-reselling-server.vercel.app/allproduct/${_id}`, {
            method: 'PUT',
        })
        .then(res => res.json())
        .then( data => {
           
            if(data.modifiedCount>0){
                toast.success('Product Reported')
                refetch()
            }
            
        })


     }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <figure><img className='lg:h-80' src= {img} alt="Shoes" />
                </figure>
                <div className="card-body font-serif ">
                    <h2 className="card-title"> {title} </h2>
                    <p>Usage: {purchaseDate}</p>
                    <p>Price :<s className='text-red-500' > ${orginalPrice}</s> ${salePrice}</p>
                    
                    <div className='flex items-center gap-1'>
                        <GrLocation size={15} />
                        <small>{location}</small>
                    </div>
                     <p>Seller: {name}</p>
                     <div className='flex items-center gap-1'>
                        <MdAccessTime/>
                        <small>{postDate}</small>
                    </div>
                    <div className="card-actions flex justify-between items-center my-2">
                    <Link to ={`/cat/${categoryId}`} className="btn btn-warning">Book Now</Link>
                    {
                       report ?
                       <button className='btn-disabled' >Reported</button> :
                       <Link  onClick={()=>handleReported(_id)} className="btn btn-sm btn-outline text-gray-600">Report</Link>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentProductCard;