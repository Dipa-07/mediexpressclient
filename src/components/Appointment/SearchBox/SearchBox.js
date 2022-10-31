import React from 'react';
import { useState } from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import './SearchBox.css';

const SearchBox = () => {
    const [doctors,setDoctors]=useState([]);
    const update=()=>{
        let select=document.getElementById('speciality');
        let option=select.options[select.selectedIndex];		
        let key=option.value;
        const data={speciality:key};
        const url='http://localhost:8080/showDoctors';
        fetch(url,{
          method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setDoctors(data);
        })
        
    }
    return (
        <div>
        <div>
            <h3>By Department</h3>
            <br />
        <select id="speciality" onChange={update}>
        <option value="option">Select Specialist</option>
        <option value="General">General</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Gastrologist">Gastrologist</option>
        </select> <br />
        </div>
        <div class="card-style">
        {
            doctors.map(doctor=><AppointmentCard doctor={doctor}></AppointmentCard>)
        }
        </div>

        </div>
    );
};

export default SearchBox;