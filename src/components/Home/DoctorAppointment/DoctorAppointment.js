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


            <h6>Appointment</h6>
            <h5>Make an Appointment</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas totam aspernatur hic, illo unde similique! Placeat assumenda dicta tempora nostrum harum excepturi dolor consectetur, aliquid voluptates molestiae laudantium neque.</p>
            <Link to='/appointment'><button class="btn btn-primary">Make Appointment</button></Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DoctorAppointment;