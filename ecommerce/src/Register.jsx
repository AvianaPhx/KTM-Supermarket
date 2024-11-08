import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [ values, setValues] = useState({
    first_name: '',  // Initial state key should match form field names
    last_name: '',
    email: '',
    password: ''
  });

  const [showPopup, setShowPopup] = useState(false);  // State to control popup visibility
  const navigate = useNavigate(); // Create navigate function

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3000/register', values)
    .then(res => {
      console.log('Response:', res);
       // Check if registration was successful
       if (res.data.Status === "Success") {
        // Show popup message
        setShowPopup(true);

        // After 2 seconds, navigate to the login page
        setTimeout(() => {
          navigate('/login');
        }, 5000);  // 2 seconds delay

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
            <input type="text" onChange={e => setValues({...values, first_name: e.target.value})} value={values.first_name}/>
            <label htmlFor="">First Name</label>
          </div>

          <div>
            <input type="text" onChange={e => setValues({...values, last_name: e.target.value})} value={values.last_name}/>
            <label htmlFor="">Last Name</label>
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

        
      {/* Conditional Popup - Success Message  THIS IS FOR TEST ONLY*/}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'green',
          color: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: '1000',
        }}>
          <h2>Registration Successful!</h2>
          <p>You will be redirected to the login page shortly...</p>
        </div>
      )}

      </div>
    </div>
  );
};

export default Register;