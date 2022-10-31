import React from 'react';
import './TestimonialCard.css';
const TestimonialCard = ({name,description,img}) => {
    return (
        <div class="card mb-3" style={{"maxWidth": "540px"}}>
  <div class="row g-0">
    <div class="col-md-4 tcard">
      <img src={img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
        
      </div>
    </div>
  </div>
</div>

    );
};

export default TestimonialCard;