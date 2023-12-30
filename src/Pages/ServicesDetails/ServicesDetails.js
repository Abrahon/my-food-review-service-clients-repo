import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServicesDetails = () => {

    const { _id, title, price, img, description } = useLoaderData()
    const { user } = useContext(AuthContext);

    const handlePlaceReview = event => {
        // console.log(handlePlaceReview);

        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {service: _id,
            serviceName: title,
            customer: name,
            email,
            message,} 
        console.log(review)
        fetch('https://y-ochre-five.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Review successfully');
                    
                }
            })
            .catch(er => console.error(er));
    }

    return (
        <div>

            <div className='mx-auto '>
                <form onSubmit={handlePlaceReview} className="w-96 mx-auto mt-5">
                <h2 className="text-4xl font-bold">{title}</h2>

                <div className="mt-5">
                    <h1 className='text-3xl text-center'>Write A Review</h1>
                        <div className="mx-auto mt-5">

                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                       
                                        <input name='name' type="text" placeholder=" Name" className="input input-bordered" />
                                    </div>
                                
                                    <div className="form-control">
                                        
                                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost " />
                                        
                                    </div>
                                    <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="text your message"></textarea>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Please your review </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>



                <div className='grid lg:grid-cols-2 w-full p-10'>
                    <div className='m-10'>
                        <img src={img} alt="" className="w-full rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold text-orange-600 mb-5 mt-5'>{title}</h2>
                        <p>{description}</p>
                        <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>

                    </div>
                 
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;