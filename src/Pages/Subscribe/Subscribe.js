import React from 'react';
import img from './special.jpg';

const Subscribe = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-teal-600 text-center'>Special food Its  50% discount for every friday</h2>
       
        <div className='rounded'>
            <img className='w-full rounded-lg mx-auto p-8' src={img} alt="" />
  
        </div>
       


        </div>
    );
};

export default Subscribe;