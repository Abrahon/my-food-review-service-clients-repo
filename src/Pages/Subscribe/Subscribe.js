import React from 'react';

const Subscribe = () => {
    return (
        <div className='w-full h-25 text-center'>
             <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" />
           <div className='m-5'>
           <button className="btn btn-outline btn-warning">Subscribe</button>
           </div>
        </div>
    );
};

export default Subscribe;