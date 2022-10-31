import React from 'react';
import './Service.css'

const Service = ({ id, name, img, text }) => {
  return (

    <div id = 'card2' class="card w-48  bg-base-100 shadow-xl" >
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" style={{ "marginTop": "5%" }} />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{text}</p>
      </div>
    </div>

  );
};

export default Service;