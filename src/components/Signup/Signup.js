import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Signup.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import { Navigate } from "react-router-dom";
const Signup = () => {
  const [errorNewUser, setErrorNewUser] = useState(false);
  const [createNewUser, setCreateNewUser] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  const onSubmit=async data => {
    console.log(data);
    await createUserWithEmailAndPassword(data.Email, data.Password);
    const url = 'http://localhost:8080/signup';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setCreateNewUser(true);
        }
        else {
          setErrorNewUser(true);
        }

      })
  };
  //console.log(errors);
  return (
    <div className="login-form w-50 mx-auto mt-4">
      <h2 className='text-center text-primary mt-3'>Please Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-50 mx-auto'>
          <br /><input className='w-100' type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} /> <br /> <br />
          <input className='w-100' type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /> <br /> <br />
          <input className='w-100' type="password" placeholder="Password" {...register("Password", { required: true, min: 6, maxLength: 12 })} /> <br /> <br />
          <input className='w-100 mb-2' type="number" placeholder="Age" {...register("Age", { required: true, maxLength: 80 })} /> <br />
          <label for="Sex">Sex</label><br />
          <select {...register("Sex", { required: true })}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select> <br />
          <label className='mt-2' for="UserType">User Type</label><br />
          <select {...register("UserType", { required: true })}>
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
            <option value="Admin">Admin</option>
          </select>
          <br /> <br /><p>Already have an account? <Link className='text-decoration-none' to='/login'><span className='text-primary'>Login Here </span></Link></p>
          {
            errorNewUser ? (<p style={{ "color": "red" }}>User with this email already exists. Try Login In</p>) : (<p></p>)
          }
          {
            createNewUser ? (<p style={{ "color": "green" }}>User Created Successfully.</p>) : (<p></p>)
          }
          <Button className='w-75 p-2 ms-4 mb-2' variant="contained" input type="submit"> Sign Up </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;