import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {

    const {title, img, price,description} =useLoaderData()


    return (
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
    );
};

export default ServicesDetails;