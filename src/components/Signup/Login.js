import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import { Navigate } from "react-router-dom";
import './Signup.css';
import { useState } from 'react';
import { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
  const history=useHistory();
  const location=useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, formState: { errors } } = useForm();
  // const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigateRegister = () => {
  // navigate('/signup');
  }
  
  const [agree, setAgree] = useState(false);
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const onSubmit = async data => {
    console.log(data);
    const email =data.Email;
    const password = data.Password;
    console.log(email,password);
    await signInWithEmailAndPassword(email, password);

    const url = 'http://localhost:8080/login';
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
          // console.log(data);
          alert('Login successful');
          const getUserInfo = localStorage.getItem('mediExpressUser');
          const parsedGetUserInfo = JSON.parse(getUserInfo);
          parsedGetUserInfo.Name = data[0].Name;
          parsedGetUserInfo.Email = data[0].Email;
          parsedGetUserInfo.UserType = data[0].UserType;
          parsedGetUserInfo.Sex = data[0].Sex;
          parsedGetUserInfo.Age = data[0].Age;
          parsedGetUserInfo.isSignedIn = true;

          localStorage.setItem('mediExpressUser', JSON.stringify(parsedGetUserInfo));
          history.replace(from);
          window.location.reload();
        }
        else {
          alert('User does not exist');
        }
      })

  };

  return (
    <div className='login w-50 mx-auto'>
      <div className='login-form my-5'>
        <h2 className='text-primary text-center my-3'>Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='container w-100 mx-auto'>
          <div className='w-50 mx-auto'>
            <input className='w-100' type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /> <br /> <br />
            <input className='w-100' type="password" placeholder="Password" {...register("Password", { required: true, min: 6, maxLength: 12 })} /> <br /> <br />
            <Form.Group className="mb-3" class="booking" controlId="formBasicCheckbox">
              <Form.Check  className={agree ? 'text-primary' : 'text-danger'} onClick={() => setAgree(!agree)} type="checkbox" label="Accept terms and conditions?" />
            </Form.Group>
            <Button className='w-75 p-2 ms-4 mb-2 mt-3' disabled={!agree} variant="contained" input type="submit">Login </Button>
            <p className='my-2'>Don't have an Account? <Link onClick={navigateRegister} className='text-primary text-decoration-none' to="/signup">Please Register...</Link></p>
           
          </div>
        </form>
      </div>
    </div>
  )
};

export default Login;