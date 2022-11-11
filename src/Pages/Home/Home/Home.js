import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Subscribe from '../../Subscribe/Subscribe';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ServicesCard from '../Services/ServicesCard';

const Home = () => {
     const services = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-20'>
                {
                    services.map(service => <ServicesCard 
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
        <Link className='btn btn-outline btn-primary mx-auto ' to='/services'>Services</Link> 

            </div>
            <Subscribe></Subscribe>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;