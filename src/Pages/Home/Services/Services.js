
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';


import ServicesCard from './ServicesCard';

const Services = () => {

  const [services, setServices] = useState([]);
  useEffect(()=>{
      fetch('http://localhost:5000/services')
      .then(res=>res.json())
      .then(data=>setServices(data))
  },[])

  return (
   
    <div className='grid w-100 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-20'>
      {
        services.map(service => <ServicesCard
          key={service._id}
          service={service}

        ></ServicesCard>)
      }
    

      <div className='max-w-screen-lg mx-auto '>
        {/* <button onClick={handleButton} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-center">See More</button> */}
      

      </div>
    
      {/* <button type="button" class="bg-indigo-500 ..." disabled>
    <svg class="animate-spin h-5 w-3 mr-3 ..." viewBox="0 0 24 24">
    
   </svg>
   Processing...
     </button>  */}
     <button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    {/* <!-- ... --> */}
  </svg>
  Processing...
</button>




    </div>
  );
};

export default Services;