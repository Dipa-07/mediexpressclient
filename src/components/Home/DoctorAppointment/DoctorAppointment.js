import React from 'react';
import doctor from '../../../Images/fe doc.jpg';
import appointment from '../../../Images/appointment.png';
import { Button, Grid, ListItem } from '@mui/material';
import './DoctorAppointment.css';
import { Link } from 'react-router-dom';
const DoctorAppointment = () => {
  return (
    <div class="da">

      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <ListItem>
            <img src={doctor} style={{ "width": "60%", "marginLeft": "40%" }} alt='' />
          </ListItem>
        </Grid>
        <Grid item xs={8}>
          <div class="da_description">


            
            <h2>Make an Appointment</h2>
            <h5 className="my-3">Explore our services and don't be late to make an appointment with our specialized doctors. Just click on the Make Appointment button and follow further procedures for an easy appointment confirmation.</h5>
            <Link to='/appointment'><button class="btn btn-primary">Make Appointment</button></Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DoctorAppointment;