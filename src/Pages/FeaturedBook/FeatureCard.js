import React from 'react';
import toast from 'react-hot-toast';
import { GrLocation, GrUser } from 'react-icons/gr'
import { MdAccessTime } from 'react-icons/md'
import { Link } from 'react-router-dom';

const FeatureCard = ({items}) => {
    const {condition, img, orginalPrice, phoneNumber, purchaseDate, salePrice,title, location, description , name, postDate, _id , report ,categoryId} = items;

    const handleReported = _id =>{

        fetch(`https://book-reselling-server.vercel.app/allproduct/${_id}`, {
            method: 'PUT',
        })
        .then(res => res.json())
        .then( data => {
           
            if(data.modifiedCount>0){
                toast.success('Product Reported')
            }
            
        })


     }

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='lg:h-80' src= {img} alt="Shoes" />
                
                </figure>
                <div className="card-body font-serif">
                    <h2 className="card-title"> {title} </h2>
                    <p>Usage: {purchaseDate}</p>
                    <p> Price:<s className='text-red-500' > ${orginalPrice}</s>  ${salePrice}</p>
                   
                    <div className='flex items-center gap-1'>
                        <GrLocation size={15} />
                        <small>{location}</small>
                    </div>
                     <div>
                     <p>Seller: {name}</p>
                     </div>
                     <div className='flex items-center gap-1'>
                        <MdAccessTime/>
                        <small>{postDate}</small>
                        
                    </div>
                    <div className="card-actions flex justify-between items-center my-2">
                   <Link className='btn btn-warning' to= {`/cat/${categoryId}`} >Book</Link>
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

export default FeatureCard;