
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import ServicesCard from './ServicesCard';

const Services = () => {

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://y-ochre-five.vercel.app/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      <div className='grid w-100 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-5 my-20'>
        {
          services.map(service => <ServicesCard
            key={service._id}
            service={service}

          ></ServicesCard>)
        }

      </div>
      


    </div>
  );
};

export default Services;