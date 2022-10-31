import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import clock from '../../../Icons/clock-svg3.svg';
import marker from '../../../Icons/marker-svg2.svg';
import phone from '../../../Icons/phone.svg';
import InfoCard from './InfoCard';
const Info = () => {
  return (
    <div className='mt-4'>
      <div class="container text-center ">
        <div class="row">
          <div class="col">
            <InfoCard cardTitle="Opening Hours" icon={clock} bgColor="#07B1BC" cardtext="We are available 24/7"></InfoCard>
          </div>
          <div class="col">
            <InfoCard cardtext="Mugda,Dhaka" cardTitle="Visit our Locations" icon={marker} bgColor='#7EA1AD'></InfoCard>
          </div>
          <div class="col">
            <InfoCard cardtext="+0262443" cardTitle="Contact us Now" icon={phone} bgColor="#07B1BC"></InfoCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;