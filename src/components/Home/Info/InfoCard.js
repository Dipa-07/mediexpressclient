import React from 'react';
import './InfoCard.css';
const InfoCard = ({ icon, cardTitle, bgColor, cardtext }) => {
  return (
    <div class="card mb-3" style={{ "backgroundColor": bgColor }}>
      <div class="row g-0">
        <div class="col-md-4 img_pos">
          <img src={icon} class="img-fluid rounded-start" className='mb-4' alt="..." />
        </div>
        <div class="col-md-8 d-flex flex-row align-items-center justify-content-center">
          <div class="card-body ">

            <div>
              <h5 class="card-title">{cardTitle}</h5>
              <p class="card-text">{cardtext}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;