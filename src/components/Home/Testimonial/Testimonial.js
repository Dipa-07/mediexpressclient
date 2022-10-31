import React from 'react';
import './Testimonial.css';
import TestimonialCard from './TestimonialCard';
import people1 from '../../../Images/avatar1.jpeg';
import people2 from '../../../Images/av3.jpg';
import people3 from '../../../Images/av4.jpg';
const Testimonial = () => {
  const testimonials = [
    {
      "name": "John Wick",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quia ex, rerum maiores consectetur labore odit nulla eos aspernatur illum nobis, debitis quod dolor sint, suscipit exercitationem hic dolore? Eligendi.",
      "img": people1
    },
    {
      "name": "John Constantine",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quia ex, rerum maiores consectetur labore odit nulla eos aspernatur illum nobis, debitis quod dolor sint, suscipit exercitationem hic dolore? Eligendi.",
      "img": people2
    },
    {
      "name": "Jon Snow",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quia ex, rerum maiores consectetur labore odit nulla eos aspernatur illum nobis, debitis quod dolor sint, suscipit exercitationem hic dolore? Eligendi.",
      "img": people3
    }
  ]
  return (
    <div class="testimonial_section">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <TestimonialCard name={testimonials[0].name} description={testimonials[0].description} img={testimonials[0].img}></TestimonialCard>
          </div>
          <div class="col">
            <TestimonialCard name={testimonials[1].name} description={testimonials[1].description} img={testimonials[1].img}></TestimonialCard>
          </div>
          <div class="col">
            <TestimonialCard name={testimonials[2].name} description={testimonials[2].description} img={testimonials[2].img}></TestimonialCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;