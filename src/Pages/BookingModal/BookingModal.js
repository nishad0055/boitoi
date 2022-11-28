import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const BookingModal = ({ booking , setBooking}) => {
    const {user} = useContext(AuthContext)
    const { title, salePrice } = booking;
    const handleBooking = event =>{
        event.preventDefault();

        const bookedItem = {
            productName:title,
            price: salePrice,
            name: user?.displayName,
            email: user?.email,
            phone: event.target.phone.value,
            mettingLocation: event.target.location.value,
        }
        fetch('https://book-reselling-server.vercel.app/bookedItem', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(bookedItem) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('Booking successfull')
            setBooking(null)
        })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} >
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-serif">Product Name</span>
                            </label>
                            <input type="text" value={title} disabled name='product' className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-serif">Price</span>
                            </label>
                            <input type="text" value={salePrice} disabled name='price' className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-serif">Your Name</span>
                            </label>
                            <input type="text" name='name' value={user?.displayName} disabled className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-serif">Your Email Address</span>
                            </label>
                            <input type="email" name='email' value={user?.email} disabled className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-serif">Your Phone Number</span>
                            </label>
                            <input type="text" name='phone' className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-serif">Meeting Location</span>
                            </label>
                            <input type="text" name='location' className="input input-bordered w-full" />
                        </div>
                        <input type="submit"  className='w-full btn btn-warning my-3' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;