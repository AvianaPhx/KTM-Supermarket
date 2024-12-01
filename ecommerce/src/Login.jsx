import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.email || !values.password) {
      setErrorMessage('Please fill all fields');
      return;
    }

    axios
      .post('http://localhost:3000/login', values, { withCredentials: true })
      .then((res) => {
        if (res.data.Status === 'Success') {
          navigate('/');
        } else {
          setErrorMessage(res.data.Error);
        }
      })
      .catch(() => {
        setErrorMessage('Network error, please try again later.');
      });
  };

  return (
    <div className="login-container">
      {/* Left Section with Logo and Info */}
      <div className="left-section">
        <h1 className="login-logo">LOGO</h1>
        <p>Shop with us. Enjoy great deals!</p>
      </div>

      {/* Right Section with Login Form */}
      <div className="right-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Log in</h2>

          {/* Display error message */}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

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
          <button type="submit" className="login-button">Log in</button>

          {/* signup Link */}
          <p className="signup">dont have an account? <a href="/register">Sign up</a> </p>

        </form>
      </div>
    </div>
  );
}

export default Login;