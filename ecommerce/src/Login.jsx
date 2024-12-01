import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Set axios defaults outside the component
axios.defaults.withCredentials = true;

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/login', values)
      .then(res => {
        console.log('Response:', res);
        if (res.data.Status === "Success") {
          navigate('/');
        } else {
          alert(res.data.Error);
        }
      })
      .catch(err => {
        if (err.response) {
          console.error('Error Response:', err.response.data);
        } else {
          console.error('Error:', err.message);
        }
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            onChange={e => setValues({ ...values, email: e.target.value })}
            value={values.email}
          />
          <label htmlFor="">Your Email</label>
        </div>
        <div>
          <input
            type="password"
            onChange={e => setValues({ ...values, password: e.target.value })}
            value={values.password}
          />
          <label htmlFor="">Password</label>
        </div>
        <button type="submit">Login</button>
        <div>
          <span>New Here? <a href='/Register'>Create an Account</a></span>
        </div>
      </form>
    </div>
  );
}

export default Login;
