import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css'; // Include the CSS for styling

function Register() {
  const [values, setValues] = useState({ username: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are filled
    if (!values.username || !values.email || !values.password) {
      setErrorMessage('Please fill all fields');
      return;
    }

    // Send registration request to backend
    axios.post('http://localhost:3000/register', values, { withCredentials: true })
      .then(res => {
        if (res.data.Status === 'Success') {
          navigate('/login');
        } else {
          setErrorMessage(res.data.Error || 'Registration failed.');
        }
      })
      .catch(err => {
        console.error('Error:', err.response ? err.response.data : err.message);  // Log error for debugging
        setErrorMessage('Network error, please try again later.');
      });
  };

  return (
    <div className="signup-container">
      {/* Left Section with Logo and Info */}
      <div className="left-section">
        <h1 className="signup-logo">LOGO</h1>
        <p>Shop with us. Enjoy great deals!</p>
      </div>

      {/* Right Section with Registration Form */}
      <div className="right-section">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign up</h2>

          {/* Display error message if any */}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          {/* Username Input */}
          <div className="name-fields">
            <div className="user-name">
              <label htmlFor="username">User name</label>
              <input
                type="text"
                id="username"
                value={values.username}
                onChange={(e) => setValues({ ...values, username: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            required
          />

          {/* Password Input */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            required
          />

          {/* Submit Button */}
          <button type="submit" className="signup-button">Sign up</button>

          {/* Login Link */}
          <p className="signup-link">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;