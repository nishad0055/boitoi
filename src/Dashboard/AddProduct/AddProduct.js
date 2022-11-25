import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddProduct = () => {

    
   
    const handleProduct = event =>{
            event.preventDefault();
            
            const image =  event.target.image.files[0]
            const formDate = new FormData()
            formDate.append('image', image)
            const url = 'https://api.imgbb.com/1/upload?key=a7389d6daccaed79e1b311439192872c'
            fetch(url, {
                method: 'POST',
                body:formDate,
            })
            .then(res=> res.json())
            .then(data => {
                const products = {
                    condition: event.target.condition.value,
                    title: event.target.title.value,
                    category: event.target.option.value,
                    orginalPrice: parseInt(event.target.mrp.value),
                    salePrice: parseInt(event.target.sellPrice.value),
                    purchaseDate: event.target.date.value,
                    img:data.data.display_url,
                    phoneNumber: event.target.phone.value,
                    location: event.target.location.value,
                    description: event.target.description.value,
                }

                fetch('http://localhost:5000/products',{
                    method:'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(products)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged>0){
                        toast.success('Product added Successfully')
                    }
                    console.log(data)
                    event.target.reset()
                })
               
            })

           
            
           
            //a7389d6daccaed79e1b311439192872c

    }

    return (
        <div className='container mx-auto flex justify-center items-center my-16'>
            
            <form onSubmit={handleProduct}  className='lg:w-1/2  border p-5'>
                <h2 className='text-4xl text-center my-2' >Add Product</h2>
                <h2>Select Condition</h2>
                <input className='mr-2' name='condition' type="radio" value="used" />
                <label>Used</label>
                <input className='ml-2 mr-2' name='condition' type="radio" value="new" />
                <label>New</label>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Title" className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Select Category</span>
                    </label>
                    <select name='option' className="select select-bordered">
                        <option value='engineeringBooks' >Engineering Books</option>
                        <option value='medicalBooks' >Medical Books</option>
                        <option value='lawsBooks'>Laws Books</option>
                        <option value='competivieBooks'>Competitive Exam Books</option>
                        <option value='generalBooks' >General Books</option>
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Orginal Price</span>
                    </label>
                    <input type="text" name='mrp' placeholder="price" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Sale Price</span>
                    </label>
                    <input type="text" name='sellPrice' placeholder="price" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Year Purchase</span>
                    </label>
                    <input type="date" name='date' placeholder="price" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Upload Image</span>
                    </label>
                    <input type="file" name='image' accept='image/*' className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name='location' placeholder="Location" className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                        
                    </label>
                    <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className='flex justify-end my-3' >
                <input  className='btn  btn-lg btn-primary' type="submit" value="Submit" />
                </div>

            </form>
        </div>
    );
};

export default AddProduct;