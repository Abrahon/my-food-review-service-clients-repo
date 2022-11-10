import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {_id, title, price,img} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceReview = event=>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value}  ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const review ={
            service: _id,
            serviceName:title,
            price,
            customer:name,
            email,
            phone,
            img,
            message,
            

        }
        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                'content-type':'application./json'
            },
            body:JSON.stringify(review)
        })
        .then(res=>res.json)
        .then(data=>console.log(data))
        .catch(er=>console.error(er));
    }

    return (
        <div>
            <form onSubmit={handlePlaceReview} >
                <img src={img} alt="" />
            <h2 className="text-4xl">{title}</h2>
            <h4 className='text-3xl'>Price:{price}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-4'>
            <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full input-bordered" />
           <input  name="lastName"type="text" placeholder="Last Name" className="input  input-ghost w-full input-bordered" />
           <input  name="phone"type="text" placeholder="Your Phone" className="input  input-ghost w-full input-bordered" required />
           <input  name="email"type="text" placeholder="Your Email" defaultValue={user?.email} className="input  input-ghost w-full" readOnly />
            </div>
            <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="text your message"></textarea>
            <input className="btn m-2"  type="text" value = "Place Your Order " />

           </form>
        </div>
    );
};

export default Checkout;