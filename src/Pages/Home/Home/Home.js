import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Subscribe from '../../Subscribe/Subscribe';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ServicesCard from '../Services/ServicesCard';
// import Typewriter from 'typewriter-effect/dist/core';

const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className='mt-20'>
                <h1 className='text-3xl text-center fon-bold'>Top Food</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-5'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }

            </div>

            <div className='text-center my-5'>

                <Link to='/services'>  <button className="btn btn-secondary">See All Services</button></Link>


            </div>

            <Subscribe></Subscribe>
            <Contact></Contact>


        </div>
    );
};

export default Home;