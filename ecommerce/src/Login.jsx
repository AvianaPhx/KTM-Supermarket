import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [ values, setValues] = useState({
    email: '',   // Initial state key should match form field names
    password: ''
  });

  const navigate = useNavigate(); // Create navigate function
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3000/login', values)
    .then(res => {
      console.log('Response:', res);
       // Check if registration was successful
       if (res.data.Status === "Success") {
        navigate('/');

      } else {
        // Show an alert if something went wrong
        alert(res.data.Error);
      }
    })
    .catch(err => {
      if (err.response) {
        // If the error has a response, we can access it safely
        console.error('Error Response:', err.response.data);
      } else {
        // If no response is available, it's likely a network error
        console.error('Error:', err.message);
      }
    });
  };


  return(
    <div>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="email" onChange={e => setValues({...values, email: e.target.value})} value={values.email}/>
            <label htmlFor="">Your Email</label>
          </div>
          <div>
            <input type="password" onChange={e => setValues({...values, password: e.target.value})} value={values.password}/>
            <label htmlFor="">Password</label>
          </div>
          <div>
            <div>
              <input type="checkbox" name="" />
              <label htmlFor="Remember Me"></label>
            </div>
            <span>Forgot Password?</span>
          </div>
          <button type="submit">Login</button>
          <div>
            <span>New Here? <a href='/Register'>Create an Account</a></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;