
import React, { useEffect, useState } from 'react';

import ServicesCard from './ServicesCard';

const Services = () => {

    const [services, setServices] = useState([]);


    const slice = services.slice(0,3);

    const handleButton = ()=>{
        setServices(services + services);

    }

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))

    }, [])
    return (
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20'>
        {
            slice.map(service=><ServicesCard
            key={service._id}
            service={service}

            ></ServicesCard>)
        }

        <div className='max-w-screen-lg mx-auto '>
       <button onClick={handleButton} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-center">See More</button>

        </div>


      </div>
    );
};

export default Services;