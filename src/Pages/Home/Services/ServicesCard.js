import React from 'react';
import Home from '../Home/Home';
import Services from './Services';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';


const ServicesCard = ({service}) => {
    const {_id, img, title, price, description} = service;



    return (
        <div className="card w-100 h-100 bg-base-100 shadow-xl">
            
           <PhotoProvider>
            <div className=''>
              <PhotoView src={img}>
           {/* <figure><img className='w-100 h-100' src={img} alt="" /></figure> */}
              </PhotoView>
              </div>
          </PhotoProvider>
            

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-2xl text-orange-600 font-semibold'>Price: $ {price}</p>

          <p>{description.slice(0, 100) + '....'}</p>
          <div className="card-actions justify-end">
            <Link to={`/serviceDetails/${_id}`}>
            <button  className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;