import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [ values, setValues] = useState({
    username: '',  // Initial state key should match form field names
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Create navigate function

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3000/register', values)
    .then(res => {
      console.log('Response:', res);
       // Check if registration was successful
       if (res.data.Status === "Success") {
        navigate('/login');

      } else {
        // Show an alert if something went wrong
        alert('Error: Registration failed');
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
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>

          <div>
            <input type="text" onChange={e => setValues({...values, username: e.target.value})} value={values.username}/>
            <label htmlFor="">Username</label>
          </div>

          <div>
            <input type="email" onChange={e => setValues({...values, email: e.target.value})} value={values.email}/>
            <label htmlFor="">Your Email</label>
          </div>

          <div>
            <input type="password" onChange={e => setValues({...values, password: e.target.value})}value={values.password}/>
            <label htmlFor="">Password</label>
          </div>

          <div>
            <div>
              <input type="checkbox" name="remember" />
              <label htmlFor="Remember Me">Remember me</label>
            </div>
            <span>Forgot Password?</span>
          </div>

          <button type="submit">Sign Up</button>

          <div>
            <span>Already have an account?? <a href='/Login'>Log In</a></span>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Register;