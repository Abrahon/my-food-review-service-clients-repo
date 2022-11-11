import React from 'react';
import img from './img10.png'

const Banner = () => {
    return (

        <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 p-10'>
            <p>
            <h2 className='text-3xl font-bold text-orange-600'>I am a delivery boy.This website created with food service for people. Here we have many items of food available .Do you have any interested ! you can buy for cheap price .</h2>
            </p>
            <img className='w-full ' src={img} alt="" />
        </div>

    );
};

export default Banner;