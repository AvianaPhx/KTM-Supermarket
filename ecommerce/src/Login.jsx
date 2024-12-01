import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

    axios.post('http://localhost:3000/login', values, { withCredentials: true })
      .then(res => {
        if (res.data.Status === "Success") {
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
    <div>
      <h1>Login</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={values.password} onChange={e => setValues({ ...values, password: e.target.value })} />
        </div>

        <button type="submit">Log In</button>
        <p>New user? <a href="/register">Sign up</a></p>
      </form>
    </div>
  );
}

export default Login;
