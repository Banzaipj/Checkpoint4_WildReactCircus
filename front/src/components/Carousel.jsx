import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.jpg';
import Image3 from '../assets/Image3.jpg';
import Image4 from '../assets/Image4.jpg';

import './Carousel.css';

export default () => (
  <div className="ImgContainer">
    <Carousel>
      <div className="image">
        <img className="picture" alt="" src={Image1} />
      </div>
      <div>
        <img className="picture" alt="" src={Image2} />
      </div>
      <div>
        <img className="picture" alt="" src={Image3} />
      </div>
      <div>
        <img className="picture" alt="" src={Image4} />
      </div>
    </Carousel>
    <div>
      <p className="para">
        La compagnie WILD CIRCUS est un cirque de renommée internationale
        qui nous emmène chaque année en Amérique du Nord, centrale et du Sud,
        en Asie, en Afrique et en Europe.
        <br />
        La seule façon de comprendre et donc d&apos;apprécier
        l&apos;énergie poétique de la découverte du Wild Circus
        est d&apos;en faire l&apos;expérience soi-même. Charlie Chaplin
        <br />
        Venez nous voir et profitez du spectacle,
        jeunes et adultes sont les bienvenus ! !!
      </p>
    </div>
  </div>
);
