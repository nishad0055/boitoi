import React from 'react';
import { GrLocation, GrUser } from 'react-icons/gr'
import { MdAccessTime } from 'react-icons/md'

const CatCard = ({items , setBooking }) => {
    const {condition, img, orginalPrice, phoneNumber, purchaseDate, salePrice,title, location, description , name, postDate, } = items
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-80' src= {img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> {title} </h2>
                    <p>Usage: {purchaseDate}</p>
                    <p> Orginal Price :<s> ${orginalPrice} </s></p>
                    <p> Sale Price: ${salePrice} </p>
                    <div className='flex items-center'>
                        <GrLocation/>
                        <small>{location}</small>
                    </div>
                     <p>Seller: {name}</p>
                     <div className='flex items-center'>
                        <MdAccessTime/>
                        <small>{postDate}</small>
                    </div>
                    <div className="card-actions justify-center w-full">
                    <label onClick={()=>setBooking(items)} htmlFor="booking-modal" className="btn">open modal</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatCard;