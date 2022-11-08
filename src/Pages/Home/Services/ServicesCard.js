import React from 'react';

const ServicesCard = ({service}) => {
    const {_id, img, title, description} = service;


    return (
        <div className="card w-100 h-100 bg-base-100 shadow-xl">
        <figure><img className='w-100 h-100' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;