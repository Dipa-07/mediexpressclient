import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import DoctorAppointment from '../DoctorAppointment/DoctorAppointment';
import Testimonial from '../Testimonial/Testimonial';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DoctorAppointment></DoctorAppointment>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;