import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Subscribe from '../../Subscribe/Subscribe';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
          <Services></Services>
          <Subscribe></Subscribe>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    );
};

export default Home;