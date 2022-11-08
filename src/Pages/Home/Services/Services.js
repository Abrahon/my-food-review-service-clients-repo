
import React, { useEffect, useState } from 'react';

import ServicesCard from './ServicesCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))

    }, [])
    return (
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            services.map(service=><ServicesCard
            key={service._id}
            service={service}

            ></ServicesCard>)
        }

      </div>
    );
};

export default Services;