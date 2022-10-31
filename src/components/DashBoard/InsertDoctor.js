import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
export default function Appointment() {

    const [createNewDoctor,setCreateNewDoctor]=useState(false);
  const [errorNewDoctor,setErrorNewDoctor]=useState(false);
  const [imageURL, setIMageURL] = useState(null);
  const [imageConverted,isImageConverted]=useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
    let avOb={};
    let arr=data.availability;
    const conv=(arr)=>{
        for(let i=0;i<arr.length;i++){
          console.log(arr[i]);
           if(i===0){
            avOb['SDay']=arr[i];
            }
            else if(i===1){
              avOb['EDay']=arr[i];
              }
            else if(i===2){
              avOb['STime']=arr[i];
              }
            else if(i===3){
              avOb['ETime']=arr[i];
            }
            else{
              avOb['Place']=arr[i];
            }
            
        }
    }    
    conv(arr);
    delete data.availability;
    let dArray=[];
    dArray.push(avOb);
    data.availability=dArray;
    data.imageUrl=imageURL;
    const url='http://localhost:8080/addDoctor';
    fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        setCreateNewDoctor(true);
        alert('Doctor Added');
      }
      else{
        setErrorNewDoctor(true);
        alert('Doctor Already exists.');
      }

    })
  };

  const handleImageUpload=event=>{
    const imageData=new FormData();
    imageData.set('key','719b813f1fc7180188ff5aea2438160c');
    imageData.append('image',event.target.files[0]);
    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
        
      setIMageURL(response.data.data.display_url);
      isImageConverted(true);
    })
    .catch(function (error) {
      
    });
    }

  

  return (
    <div class="doctor_info">

    <form onSubmit={handleSubmit(onSubmit)}>
    <label for="Name">Name</label> <br />
      <input defaultValue="test" {...register("name")} /> <br />
        <label for="Qualification">Qualification</label> <br />
        <select {...register("qualification", { required: true })}>
        <option value="MBBS">MBBS</option>
        <option value="BDS">BDS</option>
        </select> <br />
        <label for="Speciality">Speciality</label> <br />
        <select {...register("speciality", { required: true })}>
        <option value="General">General</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Gastrologist">Gastrologist</option>
        </select> <br />
     <label for="Institute">Institute</label> <br />
     <select {...register("institute", { required: true })}>
        <option value="Dhaka Medical College">Dhaka Medical College</option>
        <option value="Tangail Medical College">Tangail Medical College</option>
        <option value="Rangpur Medical College">Rangpur Medical College</option>
        </select> <br />

        <label for="availability">Availability (Select Start and End (Days, Time) and Location)</label> <br />
        <select {...register("availability", { required: true })} multiple>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
        <option value="10">10:00</option>
        <option value="11">11:00</option>
        <option value="12">12:00</option>
        <option value="13">13:00</option>
        <option value="14">10:00</option>
        <option value="15">11:00</option>
        <option value="16">12:00</option>
        <option value="17">13:00</option>
        <option value="18">18:00</option>
        <option value="19">19:00</option>
        <option value="20">20:00</option>
        <option value="21">21:00</option>
        <option value="22">22:00</option>
        <option value="23">23:00</option>
        <option value="Dhaka Medical College">Dhaka Medical College</option>
        <option value="Tangail Medical College">Tangail Medical College</option>
        <option value="Rangpur Medical College">Rangpur Medical College</option>
        </select>
        <br /><label for="Dailylimit">Daily Limit</label> <br />
     <select {...register("dailylimit", { required: true })}>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
        <option value="35">35</option>
        <option value="40">40</option>
        <option value="45">45</option>
        <option value="50">50</option>
        <option value="55">55</option>
        <option value="60">60</option>
        <option value="65">65</option>
        <option value="70">70</option>
        <option value="75">75</option>
        <option value="80">80</option>
        <option value="85">85</option>
        <option value="90">90</option>
        <option value="95">95</option>
        <option value="100">100</option>
        </select> <br />
        <label for="Address">Address</label> <br />
        <input {...register("address", { required: true })} /> <br/>
        <label htmlFor="">Add Photo</label> <br/>
        <input id='doctorImage' type="file"  name="exampleRequired" onChange={handleImageUpload}/> <br />
      {errors.exampleRequired && <span>This field is required</span>}
      {
        isImageConverted && imageURL!==null?(<input className="save-button" type="submit" value="Save"/>):(<input style={{cursor:'not-allowed'}} className="save-button" type="submit" value="Save" disabled/>)
      }
    </form>
    </div>
  );
}