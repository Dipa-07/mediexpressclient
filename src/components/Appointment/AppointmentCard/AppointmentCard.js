import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useHistory } from 'react-router-dom';
import './AppointmentCard.css'
const AppointmentCard = (props) => {
    console.log(props.doctor);
    const history=useHistory();
    const handleClick=(id)=>{
        const url=`appointment/confirmation/${id}`;
        history.push(url);
    }
    const {_id,name,qualification,institute,speciality,dailylimit,address,availability,imageUrl}=props.doctor;
    return (
        <div>
        <Card sx={{ maxWidth:'90%'}}>
        <CardMedia
        style={{ width: "50%", margin: "auto" }}
          component="img"
          alt="green iguana"
          width="60%"
          image={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name + ", " + qualification}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {speciality}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {
            "Available on " + availability[0].STime +" to" + availability[0].ETime + " from "+availability[0].SDay+
            " to "+availability[0].EDay
        }
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {
          "Chamber Address: "+institute
      }
    </Typography>
        </CardContent>
        <CardActions>
        <Link  className="booking mx-auto w-40" to={`/confirmation/${_id}`}>
          <Button  onClick={()=>handleClick(_id)} size="small">Book Appointment</Button>
          </Link>
          </CardActions>
      </Card>
        </div>
    );
};

export default AppointmentCard;