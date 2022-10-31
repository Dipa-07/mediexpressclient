import React from 'react';
import chair from '../../../Images/chair.png';
import './Banner.css';
const Banner = () => {

  return (
    <div className="hero min-h-screen mb-4">
      <div className="hero-content">
        <div class="banner d-flex flex-row ">
          <img src={chair} className="w-64 rounded-lg mx-3" alt='' />
          <div class='d-flex align-items-center justify-content-center'>
            <div>
              <h1 className="text-5xl font-bold">Welcome to MediExpress!</h1>
              <h4 className="py-6">MediExpress brings the medical treatment to people  in a easy way. One can now access medical services simply by just sitting at home.</h4>
              
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;