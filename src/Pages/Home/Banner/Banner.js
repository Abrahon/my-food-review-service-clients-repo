import React from 'react';
import img from './img10.png'

const Banner = () => {
    return (

        <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 p-10'>
            <p>
            <h2 className='text-3xl font-bold text-orange-600'>This website created with food service here many items food available .Do you any interested ! you can buy .</h2>
            </p>
            <img className='w-full ' src={img} alt="" />
        </div>

    );
};

export default Banner;