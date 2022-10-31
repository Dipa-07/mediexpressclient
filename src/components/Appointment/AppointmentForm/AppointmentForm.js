import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
const AppointmentForm = () => {
    const {dId}=useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.doctorsId=dId;
        const url='http://localhost:8080/postappointments';
        fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert("Appointment Successful");
            }
            else{
                alert("Error");
            }
        })

    }
    


    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="Name" {...register("name")} /> <br />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input placeholder="Email" {...register("Email", { required: true })} /> <br />
      <input placeholder="Phone Number" {...register("PhoneNumber", { required: true })} /> <br />
      <input placeholder="Address" {...register("Address", { required: true })} /> <br />
      <select {...register("VisitingHour", { required: true })}>
      <option value="10AM">10AM</option>
      <option value="11AM">11AM</option>
      </select><br />
      <input type="date" id="birthday" name="birthday" {...register("VisitingDate", { required: true })}/> <br />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AppointmentForm;