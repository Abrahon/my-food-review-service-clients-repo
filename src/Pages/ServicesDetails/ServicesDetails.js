import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServicesDetails = () => {
   

    const { _id, title, price, img, description } = useLoaderData()
    const { user } = useContext(AuthContext);

    const handlePlaceReview = event => {
        // console.log(handlePlaceReview);

        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value}  ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,

            customer: name,
            email,
            message,


        }
        console.log(review)
        fetch('http://localhost:5000/reviews', {
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

                    alert('Review successfully')

                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }
    // fetch(`http://localhost:5000/reviews/${id}`)




    return (
        <div className='mx-auto w-100'>
            <form onSubmit={handlePlaceReview} >
                <h2 className="text-4xl">{title}</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input  input-ghost w-full input-bordered" />
                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input  input-ghost w-full" />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="text your message"></textarea>
                <input className="btn m-2" type="submit" value="Please your review " />
            </form>

            {/* <div className="card w-full bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Please Login first!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions-justify-center">

                        <Link to='/login'><button className="btn btn-outline btn-secondary">Login</button></Link>

                    </div>
                </div>
            </div> */}

            


            <div className='grid lg:grid-cols-2 w-full p-10'>
                <div className='m-10'>
                    <img className='mx-auto w-full h-full rounded-2xl' src={img} alt="" />
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-orange-600 m-5'>{title}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: $ {price}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;