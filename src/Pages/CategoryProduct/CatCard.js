import React from 'react';

const CatCard = ({items}) => {
    const {condition, img, orginalPrice, phoneNumber, purchaseDate, salePrice,title, location, description} = items
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-80' src= {img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> {title} </h2>
                    <p> Orginal Price :<s> ${orginalPrice} </s></p>
                    <p> Sale Price: ${salePrice} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatCard;