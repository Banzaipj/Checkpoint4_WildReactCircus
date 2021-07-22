import React from 'react';
import Carousel from './Carousel';
import Footer from './footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logo from '../assets/logo.png';
import './Home.css';

const Home = () => (
  <div>
    <div className="CircusLogo">
      <img alt="" className="logo" src={logo} />
    </div>
    <Carousel />
    <Footer />
  </div>
);

export default Home;
