import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [values, setValues] = useState({ username: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.username || !values.email || !values.password) {
      setErrorMessage('Please fill all fields');
      return;
    }

    axios.post('http://localhost:3000/register', values, { withCredentials: true })
      .then(res => {
        if (res.data.Status === "Success") {
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
    <div>
      <h1>Register</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={values.username}
            onChange={e => setValues({ ...values, username: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={values.email}
            onChange={e => setValues({ ...values, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={values.password}
            onChange={e => setValues({ ...values, password: e.target.value })}
          />
        </div>

        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/login">Log In</Link></p>
      </form>
    </div>
  );
}

export default Register;
